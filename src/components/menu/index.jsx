import {Menu} from "antd";
import {
	FolderOpenOutlined,
	LinuxOutlined,
	TeamOutlined,
	UsergroupDeleteOutlined
} from "@ant-design/icons";


function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const menuItems = [
	getItem("玩家管理", "1", <TeamOutlined />, [
		getItem("发送物品", "1-1", <TeamOutlined />, null, "item"),
		getItem("实时玩家列表", "1-2", <TeamOutlined />, null, "item"),
		getItem("封禁玩家列表", "1-3", <UsergroupDeleteOutlined />, null, "item"),
	], "item"),
	getItem("存档管理", "2", <FolderOpenOutlined />, [
		getItem("帕鲁属性修改","2-1",null,null,"item"),
	], "item"),
	getItem("服务器管理", "3", <LinuxOutlined />, null, "item"),
];



const MenuView = () => {
	return (
		<div className={"flex w-full h-full p-5"}>
			<Menu theme={"dark"} mode="inline" items={menuItems} />
		</div>
	);
}

export default MenuView;