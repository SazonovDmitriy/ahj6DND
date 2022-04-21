import addTask from "./list";

export default function addBtn() {
    const addItem = document.querySelectorAll('.add__item');
    const lists = document.querySelectorAll('lists');
    const div = document.createElement('div');
    const form = document.querySelectorAll('form');

    for (let i = 0; i < addItem.length; i += 1) {
        console.log(addItem[i])
        console.log(form)
        addItem[i].addEventListener('click', () => {
            
        })
    }
}