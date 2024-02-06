import {NextResponse} from "next/server";

export async function GET(request) {
	const data = {
		code: 0,
		data: {
				"id": 1,
				"uuid": "",
				"username": "admin",
				"nickname": "祖国的花朵🌺",
				"role": "系统管理员",
				"avatar": "https://img2.baidu.com/it/u=2930860502,1649034224&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1707238800&t=15f35132e0e9fabfd44074211ca27dc3"
			}
	}

	return NextResponse.json(data)
}