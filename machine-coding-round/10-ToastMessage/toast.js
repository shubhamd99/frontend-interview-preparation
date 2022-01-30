// const Toast2 = {

//     init() {
//         this.hideTimeout = null;

//         this.el = document.createElement('div');
//         this.el.className = 'toast';
//         document.body.appendChild(this.el);
//     },

//     /**
//      * @param {string} message - Toast Message
//      * @param {string} state   - Toast State (success, error)
//     */
//     show(message, state) {
//         clearTimeout(this.hideTimeout);
//         this.el.textContent = message;
//         this.el.classList.add('show');

//         if (state) {
//             this.el.classList.add(state);
//         }

//         this.hideTimeout = setTimeout(() => {
//             this.el.classList.remove('show');
//             this.el.classList.remove(state);
//         }, 3000);
//     }
// };

class ToastClass {

    constructor() {
        this.hideTimeout = null;

        this.el = document.createElement('div');
        this.el.className = 'toast';
        document.body.appendChild(this.el);
    }

    /**
     * @param {string} message - Toast Message
     * @param {string} state   - Toast State (success, error)
    */
    show(message, state) {
        clearTimeout(this.hideTimeout);
        this.el.textContent = message;
        this.el.classList.add('show');

        if (state) {
            this.el.classList.add(state);
        }

        this.hideTimeout = setTimeout(() => {
            this.el.classList.remove('show');
            this.el.classList.remove(state);
        }, 3000);
    }
};

const Toast = new ToastClass();

// document.addEventListener('DOMContentLoaded', () => Toast2.init());
document.addEventListener('DOMContentLoaded', () => Toast);