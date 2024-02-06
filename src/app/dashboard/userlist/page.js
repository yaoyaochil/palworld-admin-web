import Avatar from "antd/lib/avatar/avatar";
import {appConfig} from "@/config/config";


export default function Page() {
	return (
		<div className={"w-full h-full p-5 flex gap-5"}>
			<div className={"w-2/12 h-full bg-white rounded-2xl p-10 px-5"}>
				<div className={"flex justify-start items-center pl-5 border-gray-300 border-2 h-16 rounded-2xl cursor-pointer hover:border-amber-300 transition-all duration-300"}>
					<Avatar src={appConfig.logo} size={"large"} />
					<div className={"flex flex-col ml-3"}>
						<span className={"text-nickname font-bold"}>NothingForUs</span>
						<span className={"text-xs text-desc font-light"}>steamid: 76561199152712744</span>
					</div>
				</div>
			</div>
			<div className={"w-10/12 h-full bg-white flex-1 rounded-2xl"}>

			</div>
		</div>
	)
}