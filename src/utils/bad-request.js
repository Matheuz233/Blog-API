export function handleBadRequest(res, validation) {
  if (!validation.success) {
    return res.status(400).json({ message: validation.error.issues[0].message })
  }
}
