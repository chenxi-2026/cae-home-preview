// giscus' public widget protocol: https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md
// No GitHub API token or owner credentials belong in this file.
const articleDiscussionConfig = Object.freeze({
  origin: 'https://giscus.app',
  repo: 'chenxi-2026/cae-home-preview',
  repoId: 'R_kgDOVmThZQ',
  category: 'Announcements',
  categoryId: 'DIC_kwDOVmThZc4DKqKd'
});
let disposeArticleInteractions = () => {};
window.addEventListener('hashchange', () => disposeArticleInteractions());

function articleGiscusSession() {
  // The OAuth return must retain #article/id; giscus' stock client clears the hash.
  const url = new URL(location.href);
  const received = url.searchParams.get('giscus');
  let session = received || '';
  try {
    if (received) localStorage.setItem('giscus-session', JSON.stringify(received));
    else session = JSON.parse(localStorage.getItem('giscus-session') || '""');
  } catch { /* Storage can be unavailable; this page still supports the returned session. */ }
  if (received !== null) {
    url.searchParams.delete('giscus');
    history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  }
  return typeof session === 'string' ? session : '';
}

function mountArticleActions(post) {
  disposeArticleInteractions();
  const article = main.querySelector('article');
  if (!article) return;
  const icons = {
    like: '<path d="M7 21H3V10h4m0 11h11a2 2 0 0 0 2-1.6l1.5-7A2 2 0 0 0 19.5 10H14l1-5c.4-2-2-3-3-1L7 11v10Z"/>',
    share: '<path d="m14 3 8 7-8 7v-5C7 12 4 15 2 20c0-9 4-13 12-13V3Z"/>',
    recommend: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    comment: '<path d="M14 18H8l-5 4v-4H2V3h20v10M19 16v6m-3-3h6"/>'
  };
  const section = document.createElement('section');
  section.className = 'article-interactions';
  section.setAttribute('aria-label', '文章互动');
  section.innerHTML = `<div class="article-action-bar">${Object.entries({like:'点赞',share:'转发',recommend:'推荐',comment:'留言'}).map(([key,label]) => `<button type="button" class="article-action" data-action="${key}" aria-label="${label}" ${key!=='share'?'aria-expanded="false" aria-controls="article-comments"':''}><svg viewBox="0 0 24 24" aria-hidden="true">${icons[key]}</svg><span>${label}</span>${key==='share'?'':'<span class="action-count" aria-label="数量加载中">—</span>'}</button>`).join('')}</div>
    <p class="interaction-status" role="status" aria-live="polite"></p>
    <div class="article-comments" id="article-comments" hidden><h2>文章讨论</h2><p class="comment-help">登录 GitHub 后，可在下方选择 👍 点赞、❤️ 推荐，或提交公开留言。所有访客共享互动数据。</p><div class="giscus-mount"></div><p class="discussion-fallback"><a target="_blank" rel="noopener noreferrer">在 GitHub 打开讨论 ↗</a><button type="button" class="discussion-retry">重新加载</button></p></div>`;
  const nav = article.querySelector('.article-nav');
  if (nav) nav.before(section); else article.append(section);
  const status = section.querySelector('.interaction-status');
  const panel = section.querySelector('.article-comments');
  const mount = section.querySelector('.giscus-mount');
  const link = section.querySelector('.discussion-fallback a');
  const term = `cae-article-${post.id}`;
  const canonical = `https://chenxi-2026.github.io/cae-home-preview/#article/${encodeURIComponent(post.id)}`;
  const searchLink = `https://github.com/${articleDiscussionConfig.repo}/discussions?discussions_q=${encodeURIComponent(term)}`;
  link.href = searchLink;
  let session = articleGiscusSession();
  let iframe = null;
  let timer;
  let disposed = false;
  const count = n => Number.isSafeInteger(n) && n >= 0 ? n : null;
  const setCounts = (values, reacted = {}) => {
    for (const key of ['like','recommend','comment']) {
      const button = section.querySelector(`[data-action="${key}"]`);
      const n = count(values[key]);
      button.querySelector('.action-count').textContent = n === null ? '—' : String(n);
      button.querySelector('.action-count').setAttribute('aria-label', n === null ? '数量暂不可用' : `${n} 次`);
      if (key !== 'comment') {
        button.classList.toggle('is-reacted', reacted[key] === true);
        button.title = reacted[key] ? '已参与，可在下方讨论区取消' : '在下方讨论区选择对应表情';
      }
    }
  };
  function showPanel(action) {
    panel.hidden = false;
    for (const button of section.querySelectorAll('[aria-expanded]')) button.setAttribute('aria-expanded', 'true');
    status.textContent = action === 'like' ? '请在下方讨论区选择 👍；尚未登录时请先登录 GitHub。' : action === 'recommend' ? '请在下方讨论区选择 ❤️；尚未登录时请先登录 GitHub。' : '请在下方讨论区登录 GitHub 后留言。';
    panel.scrollIntoView({behavior:'smooth', block:'start'});
  }
  function theme() { return document.body.classList.contains('dark') ? 'dark' : 'light'; }
  function load() {
    clearTimeout(timer);
    setCounts({});
    status.textContent = '正在读取共享互动数据…';
    const url = new URL(location.href);
    url.searchParams.delete('giscus');
    url.hash = `article/${post.id}`;
    const params = new URLSearchParams({
      origin:url.href, session, repo:articleDiscussionConfig.repo, repoId:articleDiscussionConfig.repoId,
      category:articleDiscussionConfig.category, categoryId:articleDiscussionConfig.categoryId,
      term, strict:'1', reactionsEnabled:'1', emitMetadata:'1', inputPosition:'top',
      theme:theme(), description:post.title, backLink:canonical
    });
    iframe = document.createElement('iframe');
    iframe.className = 'giscus-frame';
    iframe.title = '文章留言、点赞与推荐（GitHub）';
    iframe.setAttribute('allow', 'clipboard-write');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframe.src = `${articleDiscussionConfig.origin}/zh-CN/widget?${params}`;
    mount.replaceChildren(iframe);
    timer = setTimeout(() => {
      if (!disposed) status.textContent = '共享数据暂未加载完成。可展开留言区重试，或在 GitHub 打开讨论。';
    }, 20000);
  }
  function onMessage(event) {
    if (disposed || event.origin !== articleDiscussionConfig.origin || event.source !== iframe?.contentWindow) return;
    const data = event.data?.giscus;
    if (!data || typeof data !== 'object') return;
    if (Number.isFinite(data.resizeHeight) && data.resizeHeight > 0) iframe.style.height = `${Math.min(30000,Math.max(150,data.resizeHeight))}px`;
    if (data.discussion && data.discussion.repository?.nameWithOwner === articleDiscussionConfig.repo) {
      const d = data.discussion;
      clearTimeout(timer);
      setCounts({like:d.reactions?.THUMBS_UP?.count,recommend:d.reactions?.HEART?.count,comment:count(d.totalCommentCount)!==null && count(d.totalReplyCount)!==null ? d.totalCommentCount+d.totalReplyCount : null}, {like:d.reactions?.THUMBS_UP?.viewerHasReacted,recommend:d.reactions?.HEART?.viewerHasReacted});
      if (typeof d.url==='string' && new RegExp(`^https://github\\.com/${articleDiscussionConfig.repo}/discussions/\\d+$`).test(d.url)) link.href = d.url;
      status.textContent = '点赞、推荐和留言数量来自 GitHub；留言数量包含回复。';
    }
    if (data.signOut || (typeof data.error === 'string' && /Bad credentials|Invalid state value|State has expired/.test(data.error))) {
      try {localStorage.removeItem('giscus-session');} catch {}
      if (session) {session='';load();} else status.textContent='登录已过期，请在讨论区重新登录 GitHub。';
      return;
    }
    if (typeof data.error === 'string') {
      clearTimeout(timer);
      if (data.error.includes('Discussion not found')) {
        setCounts({like:0,recommend:0,comment:0});
        status.textContent = '还没有互动。首次点赞、推荐或留言时，会创建这篇文章的讨论。';
      } else status.textContent = 'GitHub 讨论区暂不可用。请展开留言区查看提示，或稍后重试。';
    }
  }
  window.addEventListener('message', onMessage);
  const observer = new MutationObserver(() => iframe?.contentWindow?.postMessage({giscus:{setConfig:{theme:theme()}}},articleDiscussionConfig.origin));
  observer.observe(document.body,{attributes:true,attributeFilter:['class']});
  disposeArticleInteractions = () => {disposed=true;clearTimeout(timer);observer.disconnect();window.removeEventListener('message',onMessage);iframe?.remove();};
  for (const action of ['like','recommend','comment']) section.querySelector(`[data-action="${action}"]`).onclick=()=>showPanel(action);
  section.querySelector('.discussion-retry').onclick=load;
  section.querySelector('[data-action="share"]').onclick=async()=>{
    try {
      if (navigator.share) {await navigator.share({title:post.title,url:canonical});if(!disposed)status.textContent='已完成系统分享操作';}
      else {await navigator.clipboard.writeText(canonical);if(!disposed)status.textContent='文章链接已复制，可以粘贴转发。';}
    } catch(error) {
      if (disposed || error.name==='AbortError') return;
      status.replaceChildren(document.createTextNode('请复制文章链接：'));
      const input=document.createElement('input');input.readOnly=true;input.value=canonical;input.setAttribute('aria-label','文章分享链接');status.append(input);input.select();
    }
  };
  load();
}
