// import { animate, motion } from "framer-motion";
const Pfp = () => {
  return (
    <section
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
      className=" w-[343px] h-[364px] relative flex items-center justify-center "
    >
      <div className="w-[300px] h-80 bg-gray-200 dark:bg-gray-800 absolute left-12 -z-10 top-14 max-sm:w-[335px] max-sm:-left-5 max-sm:ml-6"></div>
      <img
        src="https://s3-alpha-sig.figma.com/img/f3c0/0e99/fcbb58c0fdf3c59259201153876040ea?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pchkx3mbCiax585SR5Sl4yZdFxV-t2xjgxDWDgH-HYRrKa7pOkf07p9lsL08dzqAC6a3DEP2v6KH25MszvUL94tH4msTnUo89oONjvsX41KRJ9aDAXIOs7Myyhwpq7cJYVHUAPHv~bis827YXtK2gGgWoZfHev--GzaqY320fRM-7NQFgw3k7fSn0nHjQGc26HH6kiLSJQchZY~1NJ1KNW2RiGYMbOMETUwExsK7jmCiScEfjjXsQ0kHy1PZ5apaavazXZ4i5rI9OgW5keYarTQkQWjWt4rhvvdz~21IA5Aowubc~IcbjrjNtdV1AUAaUHlDStFDkFoEtiATA5i5RA__"
        alt=""
        className="w-72 h-80 border-8  absolute border-white dark:border-black"
      />
    </section>
  );
};
export default Pfp;
