"use client"

import { Button, Result } from 'antd';
export default function NotFound() {


	return (
		<div className={"flex w-full h-full justify-center items-center"}>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={<Button type="primary" href={"/dashboard"}>Back Home</Button>}
			/>
		</div>
	);
}