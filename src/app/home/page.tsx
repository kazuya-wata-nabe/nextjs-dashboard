import { FlexCol, SpaceBox } from "@/shared/components/box"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SubmitButton, SubmitButtonA, SubmitButtonDiv } from "@/shared/components/button"
import { FormContainer, SelectBox, TextField } from "@/shared/components/form"

const Home = () => {
  return (
    <FlexCol gap={32}>
      <h1>登録フォーム</h1>
      <FormContainer>
        <TextField label="名前" name="name" required></TextField>
        <TextField label="ああああ" name="name"></TextField>
        <SelectBox
          label="いいい"
          size="large"
          options={[
            { label: "りんご", value: "apple" },
            { label: "ばなな", value: "banana" },
            { label: "ぶどう", value: "grape" },
          ]}
        ></SelectBox>
        <SpaceBox height="100px"></SpaceBox>
        <SubmitButton size="full">登録</SubmitButton>
        {/* <SubmitButtonA size="full">登録</SubmitButtonA> */}
        {/* <SubmitButtonDiv size="full">登録</SubmitButtonDiv> */}
      </FormContainer>
    </FlexCol>
  )
}

export default Home
