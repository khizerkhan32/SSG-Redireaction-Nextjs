/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/admin",
        destination: "/",
        permanent: false,
      },
    //   {
    //     source: "/users/:user3",
    //     destination: "/",
    //     permanent: false,
    //   },
    ];
  },
};

export default nextConfig;
