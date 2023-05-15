import { defineCustomElement } from 'vue'
import MyListUsers from "./index.ce.vue";

customElements.define('my-list-users', defineCustomElement(MyListUsers));
