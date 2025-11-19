import type { NextPage } from "next";
import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";
import {
  Button,
  Center,
  Image,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  Divider,
} from "@mantine/core";
import { useTranslation } from "next-i18next";
import sendIPC from "utils/ipc/send";
import { useRouter } from "next/router";
import OnlyControlsLayout, {
  headerHeightOnlyControls,
} from "@/components/layouts/OnlyControlsLayout";
import { APP_NAME } from "utils/constants";

const WelcomePage: NextPage = () => {
  const {
    t,
    i18n: { language: locale },
  } = useTranslation();

  const router = useRouter();
  const pageHeight = `calc(100vh - ${headerHeightOnlyControls}px)`;

  const renderRightCol = () => {
    return (
      <Center h={pageHeight} p="xl" maw={800}>
        <Stack>
          <Title>{t("setup:welcomeTitle", { APP_NAME })}</Title>
          <Text opacity={0.8}>{t("setup:welcomeText", { APP_NAME })}</Text>
          <Divider mt="lg" />
          <Group>
            <Button
              onClick={() => void router.push(`/${locale}/setup-profile`)}
            >
              {t("setup:welcomeButtonCTA", { APP_NAME })}
            </Button>
            <Button variant="default" onClick={() => sendIPC("close-app")}>
              {t("closeApp")}
            </Button>
          </Group>
        </Stack>
      </Center>
    );
  };

  return (
    <OnlyControlsLayout>
      <Grid gutter={0}>
        <Grid.Col span={6}>
          <Center h={pageHeight} px="xl">
            <Image src="/images/kitchen.jpeg" alt="" radius="xl" h="66%" />
          </Center>
        </Grid.Col>
        <Grid.Col span="auto">{renderRightCol()}</Grid.Col>
      </Grid>
    </OnlyControlsLayout>
  );
};

export default WelcomePage;

export const getStaticProps = makeStaticProperties(["common", "setup"]);

export { getStaticPaths };
