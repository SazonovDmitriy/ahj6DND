function addBtn() {
    const btn = document.querySelector('.add__btn');
    const buttons = document.querySelector(`[data-widget="button"]`)
    const btns = document.createElement('div');

    btn.addEventListener('click', () => {
        btns.innerHTML = `<div class="content">
        <div class="boards__item board-TODO">
            <span class="boards__item"> TODO </span>
              <div class="lists">
                <div class="list__item"></div>
              </div>
              <div class="form"> 
                <textarea class="textarea" placeholder="Введите текст"></textarea>
                <button class="add__item">+ Add another card</button>
                <button class="close__item"></button>
            </div>
            <button class="add__btn" type="submit">+ Add another card</button>
        </div>
    </div>`

        buttons.insertAdjacentElement('afterbegin', btns)
    })
    

}

// `<div class="content">
//     <div class="boards__item board-TODO">
//         <span class="boards__item"> TODO </span>
//           <div class="lists">
//             <div class="list__item"></div>
//           </div>
//           <div class="form"> 
//             <textarea class="textarea" placeholder="Введите текст"></textarea>
//             <button class="add__item">+ Add another card</button>
//             <button class="close__item"></button>
//         </div>
//         <button class="add__btn" type="submit">+ Add another card</button>
//     </div>
// </div>`