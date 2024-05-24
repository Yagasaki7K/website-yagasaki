import React from 'react'
import ArticleDetails from '@/components/ArticleDetails'
import Link from 'next/link'
import Copyright from '@/components/Copyright'

const doc = () => {
    return (
        <>
            <div className="overlay" />
            <title>Yagasaki.dev | Bookmarks</title>
            <ArticleDetails>
                <div className='card card-page text'>
                    <div className="backToHome">
                        <Link href={'/'}><i className="uil uil-arrow-left"> Back To Home</i></Link>
                    </div>
                    <h1 className='post-title'>Docs</h1>
                    <div className='post-body'>
                        <h1>Summary</h1>
                        <li><a href="#ssl3">ssl3_get_record:wrong version</a></li>
                        <li><a href="#git-push-results">Git Push Results in Authentication Failed</a></li>
                        <li><a href="#unable-to-write-file">Unable to write file on Linux/VS Code</a></li>
                        <li><a href="#nx-eaccess-permission-denied">NX EACCESS Permission Denied</a></li>
                    </div>

                    <div className='post-body'>
                        <div id="ssl3">
                            <h4>How to fix write EPROTO 1C3B0000:error:0A00010B:SSL routines:ssl3_get_record:wrong version</h4>
                            <pre>Change `https` request to `http`</pre>
                        </div>

                        <hr />

                        <div id="git-push-results">
                            <h4>Git Push Results in Authentication Failed</h4>
                            <pre>git remote -v</pre>
                            <pre>git remote set-url origin git@github.com:USERNAME/REPONAME.git</pre>
                            <p>Or maybe you need a generate a ssh <code>ssh-keygen</code> and <br />copy using <code>cat /home/yagasaki/.ssh/id_rsa.pub</code> file</p>
                        </div>

                        <hr />

                        <div id="unable-to-write-file">
                            <h4>Unable to write file on Linux/VS Code</h4>

                            <p>I recently encountered this issue, and I knew it was a permission problem.</p>

                            <p>It can happen when you clone a repository, and due to SSH configuration or other restrictions, it only allows read permissions for the repository. Even if you try to manually create a file or use the terminal to create one within the folder, it simply returns <code>Unable to write file.../</code>.</p>

                            <p>The resolution for this was to grant the necessary permissions to my user on Ubuntu, in my case: <code>yagasaki</code>.</p>

                            <pre>sudo chmod -R 777 FOLDERNAME</pre>

                            <p>Afterward, I was able to have the appropriate permissions to create and edit files as needed.</p>
                        </div>

                        <hr />

                        <div id="nx-eaccess-permission-denied">
                            <h4>NX EACCESS Permission Denied</h4>
                            <p>If it didn't work, run <code>sudo su</code> and try again.</p>
                            <p>If the issue persists, contact the person in charge of the project.</p>
                            <p>Or maybe you need give a permission using <code>chmod -R 777 FOLDERNAME</code></p>
                        </div>
                    </div>
                </div>
            </ArticleDetails>
            <Copyright isUwu={false} />
        </>
    )
}

export default doc