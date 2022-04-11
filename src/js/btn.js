export default function addBtn() {
    const btn = document.querySelectorAll('.add__btn');
    const btnItem = document.querySelectorAll('.add__item')
    console.log(btn)

    btn.addEventListener('click', () => {
        btnItem.classList.remove('hidden')
    })

}