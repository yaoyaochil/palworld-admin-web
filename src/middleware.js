// middleware.js

import { NextResponse } from 'next/server'

export function middleware(request) {

	//  clone 请求标头
	// const requestHeaders = new Headers(request.headers)
	// requestHeaders.set('x-hello-from-middleware1', 'Huaduo')

	// 你也可以在 NextResponse.rewrite 中设置请求标头
	const response = NextResponse.next()

	// 设置新响应标头 `x-hello-from-middleware2`
	response.headers.set('new-token', 'yyyyyyyyyy')
	return response
}
