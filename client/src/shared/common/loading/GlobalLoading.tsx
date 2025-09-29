const GlobalLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-accent z-40">
      <div className="w-12 h-12 border-2 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default GlobalLoading;
