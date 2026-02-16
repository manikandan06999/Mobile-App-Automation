import logo from "@/assets/images/mablogo.png";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col items-center justify-center px-6 transition-colors duration-300">

      {/* Logo */}
      <div className="mb-10 text-center">
        <img
          src={logo}
          alt="Appy Logo"
          className="h-14 mx-auto mb-2"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Build native apps
        </p>
      </div>

      {children}
    </div>
  );
};

export default AuthLayout;
