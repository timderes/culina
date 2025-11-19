import type { NextPage } from "next";
import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";

import { useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import OnlyControlsLayout from "@/components/layouts/OnlyControlsLayout";
import {
  Button,
  ColorPicker,
  Container,
  Divider,
  Flex,
  Group,
  Text,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { APP_NAME } from "utils/constants";
import { isNotEmpty, useForm } from "@mantine/form";
import { v4 as getUuid } from "uuid";
import { IconHelpCircleFilled } from "@tabler/icons-react";

const colors = [
  "#fa5252",
  "#e64980",
  "#be4bdb",
  "#7950f2",
  "#4c6ef5",
  "#228be6",
  "#15aabf",
  "#12b886",
  "#40c057",
  "#82c91e",
  "#fab005",
  "#fd7e14",
];

const SetupProfilePage: NextPage = () => {
  const {
    t,
    i18n: { language: locale },
  } = useTranslation();

  const router = useRouter();

  const profile = useForm<Profile>({
    initialValues: {
      color: "#4c6ef5",
      firstName: "",
      lastName: "",
      uuid: getUuid(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    validate: {
      firstName: isNotEmpty(
        t("setup:formErrors.fieldIsEmpty", {
          FIELD_NAME: t("setup:formLabels.firstName"),
        })
      ),
      lastName: isNotEmpty(
        t("setup:formErrors.fieldIsEmpty", {
          FIELD_NAME: t("setup:formLabels.lastName"),
        })
      ),
    },
  });

  const handleCreateProfile = (values: Profile) => {
    profile.validate();

    if (profile.isValid()) {
      window.ipc.setDefaultProfileUUID(values.uuid);
      void router.push(`/${locale}/`);
    }
  };

  return (
    <OnlyControlsLayout>
      <Container component="header" my="lg">
        <Title mb="md">{t("setup:createProfileTitle")}</Title>
        <Text>{t("setup:createProfileText", { APP_NAME })}</Text>
      </Container>

      <form
        onSubmit={profile.onSubmit((values) => handleCreateProfile(values))}
      >
        <Container my="lg">
          <Divider
            label={t("setup:profileDetailsTitle")}
            labelPosition="left"
            mb="lg"
          />
          <Group grow mb="lg" align="start">
            <TextInput
              withAsterisk
              label={t("setup:formLabels.firstName")}
              key={profile.key("firstName")}
              {...profile.getInputProps("firstName")}
            />
            <TextInput
              withAsterisk
              label={t("setup:formLabels.lastName")}
              key={profile.key("lastName")}
              {...profile.getInputProps("lastName")}
            />
          </Group>

          <Flex gap="xs" align="center">
            <Text size="md">{t("setup:formLabels.color")}</Text>
            <Tooltip label={t("setup:colorHelpText")} withArrow>
              <IconHelpCircleFilled size={20} />
            </Tooltip>
          </Flex>
          <ColorPicker
            format="hex"
            withPicker={false}
            fullWidth
            maw={500}
            swatches={colors}
            swatchesPerRow={colors.length / 2}
            {...profile.getInputProps("color")}
          />

          <Divider my="lg" />
          <Group justify="flex-end" mt="md">
            <Button type="submit">{t("setup:createProfileCTA")}</Button>
          </Group>
        </Container>
      </form>
    </OnlyControlsLayout>
  );
};

export default SetupProfilePage;

export const getStaticProps = makeStaticProperties(["common", "setup"]);

export { getStaticPaths };
