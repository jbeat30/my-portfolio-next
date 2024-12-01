'use client'

import Link from "next/link";
import {ReactElement} from "react";

export default function Hero({ imgSection }: { imgSection: ReactElement }) {
  return (
      <div className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
              className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요👋
              <br className="hidden lg:inline-block"/>
              저는 jbeat입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              안녕하세요, 감사해요.
              잘 있어요, 다시 만나요.
              아침 해가 뜨면
              매일 같은 사람들과 또다시 새로운 하루 일을 시작해.
              안녕하세요, 감사해요.
              잘 있어요, 다시 만나요.
              힘들었던 하루, 많이들 지쳤지만
              우리들 모두 다 힘차게 사는 거야.
            </p>
            <div className="flex justify-center">
              <Link href="/projects"
                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트 보러가기
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {imgSection}
          </div>
        </div>
      </div>
  )
}