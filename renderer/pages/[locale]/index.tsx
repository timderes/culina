import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";
import DefaultLayout from "@/components/layouts/Default";
import { Stack } from "@mantine/core";
import HeaderGreeting from "@/components/HeaderGreeting";
import useDefaultProfile from "hooks/getDefaultProfile";

const IndexPage = () => {
  const defaultProfile = useDefaultProfile();

  return (
    <DefaultLayout withNavbarOpen>
      <Stack my="lg">
        <HeaderGreeting firstName={defaultProfile?.firstName || ""} />
      </Stack>
    </DefaultLayout>
  );
};

export default IndexPage;

export const getStaticProps = makeStaticProperties(["common"]);

export { getStaticPaths };
