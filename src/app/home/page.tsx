import { FlexCol } from "@/shared/components/box"
import { SubmitButton, SubmitButtonDiv } from "@/shared/components/button"
import { FormContainer, TextField } from "@/shared/components/form"

const Home = () => {
  return (
    <FlexCol gap={32}>
      <h1>登録フォーム</h1>
      <FormContainer>
        <TextField label="名前" name="name"></TextField>
        {false && <SubmitButton size="full">登録</SubmitButton>}
        {true && <SubmitButtonDiv size="full">登録</SubmitButtonDiv>}
      </FormContainer>
    </FlexCol>
  )
}

export default Home
