import Link from 'next/link'
import React from 'react'

const fetchRepoContents = async({ name }) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const response = await fetch(`https://api.github.com/repos/Awhire/${name}/contents`)
    const contents = await response.json()

    return contents
}

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name)
    // const dirs = contents.filter(content => content.type === 'file')

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {/* {dirs.map((dir) => (
            <li key={dir.path}>
                <Link href={`/code/repos/${name}/${dir.path}`}>
                    {dir.path }
                </Link>
            </li>
        ))} */}
        {/* {contents.documentation_url} */}
      </ul>
    </>
  )
}

export default RepoDirs
