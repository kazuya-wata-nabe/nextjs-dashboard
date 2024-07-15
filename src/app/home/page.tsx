import { FlexCol } from "@/shared/components/box"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SubmitButton, SubmitButtonDiv } from "@/shared/components/button"
import { FormContainer, TextField } from "@/shared/components/form"

const Home = () => {
  return (
    <FlexCol gap={32}>
      <h1>登録フォーム</h1>
      <FormContainer>
        <TextField label="名前" name="name"></TextField>
        <SubmitButton size="full">登録</SubmitButton>
        {/* <SubmitButtonDiv size="full">登録</SubmitButtonDiv> */}
      </FormContainer>
    </FlexCol>
  )
}

export default Home
