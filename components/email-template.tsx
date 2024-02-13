interface Props
{
  token: string,
  confirmLink: string
}
export const EmailTemplate = ({ token, confirmLink }: Props) =>
{
  return (
    <p>
      Click <a href={confirmLink}>here</a> to confirm email.
    </p>
  )
}