"use client"

import {MessageOutlined, SearchOutlined, TeamOutlined} from "@ant-design/icons";
import {Button, Popover} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import {useEffect, useRef} from "react";

const HeaderView = () => {

	const userInfo = useRef({});

	const getUserInfo = async () => {
		try {
			const res = await fetch('/api/v1/user/getUserInfo');
			const data = await res.json();

			if (data.code === 0) {
				return data.data;
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getUserInfo().then(data => {
			userInfo.current = data;
		})
	}, [])


	return (
		<div className={"flex h-full w-full bg-white"}>
			<div className={"flex justify-center items-center ml-3 h-full w-auto"}>
				<Button shape={"circle"} type={"text"} icon={<SearchOutlined/>}/>
			</div>
			<div className={"h-full flex gap-4 justify-start items-center ml-auto mr-5"}>
				<Button shape={"circle"} type={"text"} icon={<TeamOutlined/>}/>
				<Button shape={"circle"} type={"text"} icon={<MessageOutlined/>}/>
				<Popover placement="bottomRight" title={"账号管理"} content={

					<div className={'w-full flex flex-col gap-2'}>
						<hr className={"border-divider"}/>
						<Button className={"w-full"} type={"text"}>个人中心</Button>
						<Button className={"w-full"} type={"text"}>账号设置</Button>
						<Button className={"w-full"} danger type={"text"}>注销登录</Button>
					</div>
				} trigger="click">
					<Avatar className={"cursor-pointer"} src={userInfo.current.avatar}/>
				</Popover>
			</div>
		</div>
	)
}

export default HeaderView;