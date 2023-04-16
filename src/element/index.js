import Vue from "vue";
import {
    Container,
    Header,
    Aside,
    Main,
    Form,
    FormItem,
    Input,
    Image,
    Button,
    Message,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Divider,
    Menu,
    Submenu,
    MenuItem,
    Tooltip,
    Drawer,
    Collapse,
    CollapseItem,
    RadioGroup,
    RadioButton,
    MenuItemGroup,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Col,
    Row,
    Table,
    TableColumn,
    MessageBox,
    Dialog,
    Select,
    Option,
    Pagination
} from "element-ui"


Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Image)
Vue.use(Button)
Vue.prototype.$message = Message;
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Divider)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Tooltip)
Vue.use(Drawer)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination)