document.querySelectorAll('[data-ams-doc="math inline"] tex-math').forEach(node => node.innerHTML = `\\(${node.innerHTML}\\)`)
document.querySelectorAll('[data-ams-doc="math block"] tex-math').forEach(node => node.innerHTML = `\\[${node.innerHTML}\\]`)
const s = document.createElement('script');
s.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
document.body.append(s)
