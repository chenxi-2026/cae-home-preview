function isPaidArticle(post){return [29,31,33,37].includes(Number(post.id));}
function paidArticleBadge(post){return isPaidArticle(post)?'<span class="paid-badge">付费阅读</span>':'';}
function paidArticlePreview(post){
 main.innerHTML=`<article class="article imported-article paid-article"><a class="back" href="#posts">← 返回技术博客</a><div class="paid-heading"><span class="paid-badge">付费阅读</span><span>经验分享</span></div><h1>${esc(post.title)}</h1><div class="meta"><span>作者 · ${esc(post.author)}</span><span>约 ${post.time} 分钟阅读</span></div><section class="paid-summary" aria-label="文章摘要"><h2>文章摘要</h2><p>${esc(post.desc)}</p><div class="tags">${post.tags.map(tag=>`<span>${esc(tag)}</span>`).join('')}</div></section><section class="paid-gate" aria-labelledby="paid-gate-title"><span class="paid-lock" aria-hidden="true">◇</span><h2 id="paid-gate-title">解锁完整工程经验</h2><p>本篇为「经验分享」中的付费文章。完整正文、案例配图与结果对比将在开放购买后提供阅读。</p><div class="paid-features"><span>完整技术正文</span><span>案例配图</span><span>工程结果对比</span></div><button class="paid-purchase" type="button" disabled aria-describedby="paid-status">暂未开放购买</button><p id="paid-status" class="paid-status">价格及购买方式待公布，当前暂不支持支付或解锁。</p></section><div class="article-nav"><a class="back" href="#posts">← 返回技术博客</a></div></article>`;
}
function postArtwork(post){
 return post.cover?`<div class="art post-cover"><img src="${esc(post.cover)}" alt="" loading="lazy"><span class="post-source">CAE之家 · ${post.sourceKind==='document'?'技术文章':'公众号文章'}</span></div>`:artwork(post.art);
}
function importedArticle(post){
 if(isPaidArticle(post)){paidArticlePreview(post);return;}
 const collection=posts.filter(p=>p.imported);
 const next=collection[(collection.findIndex(p=>p.id===post.id)+1)%collection.length];
 const sourceLink=post.sourceUrl?`<a href="${esc(post.sourceUrl)}" target="_blank" rel="noopener noreferrer">阅读微信原文 ↗</a>`:'';
 main.innerHTML=`<article class="article imported-article"><a class="back" href="#posts">← 返回技术博客</a><h1>${esc(post.title)}</h1><div class="meta"><span class="category">${esc(post.cat)}</span><span>${post.date?`原文发布于 ${post.date}`:'原文日期未提供'}</span><span>约 ${post.time} 分钟阅读</span></div><div class="source-bar"><div><strong>${post.sourceKind==='document'?'作者':'微信公众号'} · ${esc(post.author)}</strong><span>${post.sourceNote?esc(post.sourceNote):'保留原文正文与配图 · 点击图片可放大查看'}</span></div>${sourceLink}</div><div class="article-body">${post.body}</div><div class="article-nav"><a class="back" href="#posts">← 返回技术博客</a>${sourceLink}<a class="back" href="#article/${next.id}">下一篇：${esc(next.title)} →</a></div></article><dialog class="blog-lightbox" aria-label="原文图片预览"><div class="lightbox-toolbar"><a target="_blank" rel="noopener noreferrer">打开原尺寸图片 ↗</a><button type="button" aria-label="关闭图片预览">关闭 ✕</button></div><img alt=""></dialog>`;
 const dialog=main.querySelector('.blog-lightbox');
 const showImage=image=>{dialog.querySelector('img').src=image.src;dialog.querySelector('img').alt=image.alt;dialog.querySelector('a').href=image.src;dialog.showModal();};
 main.querySelectorAll('.article-body img').forEach(image=>{
  if(image.closest('a'))return;
  const button=document.createElement('button');button.type='button';button.className='image-button';button.setAttribute('aria-label',`放大：${image.alt}`);
  image.replaceWith(button);button.appendChild(image);button.onclick=()=>showImage(image);
 });
 dialog.querySelector('button').onclick=()=>dialog.close();
 dialog.onclick=event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}};
}
