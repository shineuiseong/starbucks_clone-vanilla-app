const searchEl = document.querySelector('.search')
const searchInput = searchEl.querySelector('input')

// 포커스
searchEl.addEventListener('click', () => {
  searchInput.focus()
})

//포커스되면 placeholder 추가
searchInput.addEventListener('focus', () => {
  searchEl.classList.add('focused')
  searchInput.setAttribute('placeholder', '통합검색')
})

searchInput.addEventListener('blur', () => {
  searchEl.classList.remove('focused')
  searchInput.setAttribute('placeholder', '')
})
