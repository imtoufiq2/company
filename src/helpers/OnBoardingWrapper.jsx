const LoginFormWrapper = ({ children, onSubmit }) => {
  return (
    <div className=" mx-auto mt-8 w-full rounded-md bg-white sm:max-w-[592px] sm:border-[0.5px] md:rounded-2xl">
      <form
        className="flex h-fit  flex-col gap-6  px-6  py-[60px]   md:gap-9 md:px-[72px] md:py-[72px]"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
};

export default LoginFormWrapper;
