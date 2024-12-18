function isRepositoryPage() {
  return document.querySelector('[data-pjax="#js-repo-pjax-container"]') !== null;
}

function transformUrl(githubUrl) {
  try {
    const url = new URL(githubUrl);
    if (!url.hostname.includes('github.com')) return null;
    const pathParts = url.pathname.split('/').filter(Boolean);
    if (pathParts.length < 2) return null;
    const gitIngestUrl = new URL(`https://gitingest.com${url.pathname}${url.search}`);
    return gitIngestUrl.toString();
  } catch (e) {
    console.error('Error transforming URL:', e);
    return null;
  }
}

function injectIngestButton() {
  if (!isRepositoryPage()) return;
  if (document.querySelector('.gitingest-button')) return;

  const codeButtonContainer = document.querySelector('ul.pagehead-actions');
  if (!codeButtonContainer) return;

  const listItem = document.createElement('li');
  const button = document.createElement('a');
  button.className = 'gitingest-button btn btn-sm';
  button.innerHTML = 'Ingest';
  button.href = transformUrl(window.location.href);
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  
  listItem.appendChild(button);
  codeButtonContainer.insertBefore(listItem, codeButtonContainer.firstChild);
}

injectIngestButton();

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      injectIngestButton();
    }
  }
});

const repoContainer = document.querySelector('#js-repo-pjax-container');
if (repoContainer) {
  observer.observe(repoContainer, { childList: true, subtree: true });
}