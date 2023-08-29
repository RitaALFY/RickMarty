export interface User {
  id: number
  username: string
  password: string
  email: string

}

export namespace User {
  export function generateFakeUsers(): User[] {
    const users = []
    users.push({
      id: 1,
      username: 'admin',
      password: 'P@ssw0rd2023',
      email: 'admin@admin.fr',

    })



    return users
  }
}
