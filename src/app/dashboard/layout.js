"use client"

import {ConfigProvider, Layout as AntdLayout} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import {SiderLogo} from "@/components/sider-logo";
import {useEffect, useRef, useState} from "react";
import HeaderView from "@/components/header";
import FooterView from "@/components/footer";
import MenuView from "@/components/menu";
import {themeConfig} from "@/config/config";

const {Header, Footer, Sider, Content} = AntdLayout;

export default function DashboardLayout({children}) {
	const [dataLoaded, setDataLoaded] = useState(false);
	const userInfo = useRef({});
	const user_info = async () => {
		try {
			const res = await fetch('/api/v1/user/getUserInfo');
			const data = await res.json();

			if (data.code === 0) {
				userInfo.current = data.data;
				setDataLoaded(true);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		user_info();
	}, [])


	return (
		<ConfigProvider theme={themeConfig}>
			<AntdLayout className={"h-full"}>
				<Sider width="280px">
					<div className={"flex flex-col h-full w-full bg-sider"}>
						{/*sider栏顶部logo*/}
						<SiderLogo/>
						<hr className={"border-divider"}/>

						{/*菜单部分*/}
						<div className={"flex justify-center items-center w-full flex-1"}>
							<MenuView/>
						</div>

						{/*sider栏底部用户信息*/}
						<div
							className={"mt-auto w-full h-16 flex items-center justify-start pl-4 gap-1 rounded border-divider border-1 text-white hover:bg-sider-hover cursor-pointer transition-all duration-300"}>
							<Avatar size={44} src={userInfo.current.avatar}/>
							<div className={"flex flex-col h-full justify-center items-start"}>
								<h6 className={"text-nickname font-bold"}>{userInfo.current.nickname}</h6>
								<span className={"text-xs text-desc font-light"}>{userInfo.current.role}</span>
							</div>
						</div>
					</div>
				</Sider>
				<AntdLayout className={"m-0 p-0"}>
					<Header className={"p-0 m-0"} style={{"padding": 0}}>
						<div className={"flex h-full w-full bg-white"}>
							<HeaderView/>
						</div>
					</Header>
					<Content>
						<div className={"overflow-scroll w-full h-full"}>
							{children}
						</div>
					</Content>
					<Footer style={{"padding": "0"}}>
						<FooterView/>
					</Footer>
				</AntdLayout>
			</AntdLayout>
		</ConfigProvider>
	);
}
