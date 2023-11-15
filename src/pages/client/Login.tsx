


const LoginPage = () => {

    return (
        <div
            className="bg-[url('http://res.cloudinary.com/djcimgjcc/image/upload/v1697165893/h0kbzymvapcqrmcvpmo8.jpg')] relative min-h-screen w-full bg-no-repeat bg-cover">
            <div className="backdrop-blur-[4px] absolute inset-0 "></div>
            <div className="relative h-screen ">
                <div
                    className="w-[280px] px-10 py-3 box-content absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2   bg-white border rounded-md ">
                    <div>
                        <h1 className="text-center font-semibold text-xl mb-8">Đăng nhập</h1>
                    </div>
                    <form id="formLogin" action="">
                        <div className="h-[110px] mb-6">
                            <label htmlFor="email" className="w-full">Địa chỉ email <span
                                    className="text-red-700">*</span></label>
                            <input className="border-2 rounded-md my-3 emailInput  p-4 w-full"
                                placeholder="Nhập địa chỉ email" type="email" name="email"/>
                        </div>
                        <div className="h-[110px] mb-6">
                            <label htmlFor="pass" className="w-full my-3">Mật khẩu <span
                                    className="text-red-700">*</span></label>
                            <input className="border-2 rounded-md my-3 passInput  p-4 w-full"
                                placeholder="Nhập mật khẩu" type="password" name="pass"/>
                            
                        </div>
                        <div className="flex flex-col gap-1 justify-center">
                            <button 
                                className="bg-red-700 border-2 mb-3 border-red-700 rounded-md p-4 text-white font-semibold hover:opacity-80 active:translate-y-[2px] transition-all ease-in-out">Đăng
                                nhập</button>
                            <a href="" className="text-center text-red-700 hover:underline">Quên mật
                                khẩu?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;