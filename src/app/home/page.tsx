import { FlexCol } from "@/shared/components/box"
import { SubmitButton } from "@/shared/components/button"
import { FormContainer, TextField } from "@/shared/components/form"

const Home = () => {
  return (
    <FlexCol gap={8}>
      <div style={{ height: "100px" }}></div>
      <FormContainer>
        <TextField label="hoge"></TextField>
        <SubmitButton size="small">submit</SubmitButton>
      </FormContainer>
    </FlexCol>
  )
}

export default Home
