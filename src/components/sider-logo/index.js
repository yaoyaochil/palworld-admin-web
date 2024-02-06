import {appConfig} from "@/config/config"


export const SiderLogo = () => {
	return (
		<div className={"w-full h-48 flex flex-col items-start justify-center gap-5"}>
			<img src={appConfig.logo} alt="" className={"h-10 rounded-full ml-5"}/>
			<div className={"flex flex-col bg-logo-bg w-10/12 h-2/6 rounded justify-center pl-2 ml-5"}>
				<span className={"text-white"}>{appConfig.systemName}</span>
				<span className={"text-desc"}>{appConfig.systemDescription}</span>
			</div>
		</div>
	);
}