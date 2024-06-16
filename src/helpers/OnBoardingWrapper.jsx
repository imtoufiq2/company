const LoginFormWrapper = ({ children, onSubmit }) => {
  return (
    <div className="mx-auto mt-8 pb-2 w-full rounded-mdbg-white sm:max-w-[592px] sm:border-[0.5px] md:rounded-2xl h-[80vh]">
      <form
        className="flex flex-col gap-6 px-6 md:gap-9 md:px-[72px] md:py-[72px] h-full justify-between"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
};

export default LoginFormWrapper;
