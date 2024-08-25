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
                        <li><Link href="#ssl3">ssl3_get_record:wrong version</Link></li>
                        <li><Link href="#git-push-results">Git Push Results in Authentication Failed</Link></li>
                        <li><Link href="#unable-to-write-file">Unable to write file on Linux/VS Code</Link></li>
                        <li><Link href="#nx-eaccess-permission-denied">NX EACCESS Permission Denied</Link></li>
                        <li><Link href="#command-git-config">Command Git Config</Link></li>
                        <li><Link href="#command-trigger-pipeline">Command Trigger Pipeline</Link></li>
                        <li><Link href="#how-to-kill-a-port-on-wsl">How to kill a port on WSL</Link></li>
                        <li><Link href="#installing-obsidian-in-wsl">Installing Obsidian in WSL</Link></li>
                        <li><Link href="#fix-packetloss-on-fivem">Fix Packetloss on FiveM</Link></li>
                        <li><Link href="#error-upgrading-to-wsl2">Error upgrading to WSL 2</Link></li>
                        <li><Link href="#error-during-installation-2502-and-2503">Error during installation: 2502 and 2503</Link></li>
                    </div>

                    <div className='post-body docs'>
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

                        <div id="command-git-config">
                            <h4>Command Git Config</h4>
                            <pre>git config --global user.name "Your-Full-Name"</pre>
                            <pre>git config --global user.email your-email-address</pre>
                        </div>

                        <div id="command-trigger-pipeline">
                            <h4>Command Trigger Pipeline</h4>
                            <pre>git commit --allow-empty -m "Trigger pipeline"</pre>
                        </div>

                        <div id="how-to-kill-a-port-on-wsl">
                            <h4>How to kill a port on WSL</h4>
                            <p>No Windows:</p>
                            <p>Lista todos os processos que estão rodando</p>
                            <pre>netstat -ano</pre>
                            <p>Lista todos os processos que estão rodando na porta 8000</p>
                            <pre>netstat -ano | findstr 8000</pre>
                            <p>Mata processo que está rodando na porta 8000 pelo PID</p>
                            <pre>taskkill /f /pid PID</pre>

                            <p>No Linux</p>
                            <p>Lista todos os processos que estão rodando</p>
                            <pre>sudo netstat -tlpn</pre>
                            <p>Mata processo que está rodando na porta 8000</p>
                            <pre>sudo netstat -tlpn | grep 8000</pre>
                            <pre>sudo kill -9 `sudo lsof -t -i:8000`</pre>
                            <pre>sudo kill -9 $(lsof -t -i:8000)</pre>
                        </div>

                        <div id="installing-obsidian-in-wsl">
                            <h4>Installing Obsidian in WSL</h4>
                            <pre>wget https://github.com/obsidianmd/obsidian-releases/releases/download/v1.4.13/obsidian_1.4.13_amd64.deb</pre>
                            <pre>sudo apt-get install -y ./obsidian_1.4.13_amd64.deb</pre>
                            <pre>sudo apt-get update && sudo apt-get install -y libgbm1 libasound2</pre>
                            <p>After it, just type on Terminal:</p>
                            <pre>sudo obsidian --no-sandbox</pre>
                        </div>

                        <div id="fix-packetloss-on-fivem">
                            <h4>Fix Packetloss on Fivem</h4>
                            <pre>ipconfig /flushdns</pre>
                            <pre>netsh winsock reset</pre>
                            <p>Alternative: Turn off every firewall protection</p>
                            <p>DNS: 8.8.8.8/8.8.4.4</p>
                        </div>

                        <div id="error-upgrading-to-wsl2">
                            <h4>Error upgrading to WSL 2 : There are no more endpoints available from the endpoint mapper (WSL)</h4>

                            <p>What ended up being the issue for me was the <b>Host Network Service</b> was not running. I set it to run automatically and started it up. I was then able to launch Ubuntu and set it as the default in WSL 2.</p>
                        </div>
                        <div id="error-during-installation-2502-and-2503">
                            <h4>Error during installation: 2502 and 2503</h4>

                            <p>C: {'>'} Windows {'>'} Temp {'>'} Proprieties {'>'} Security {'>'} Advanced {'>'} Windows user and change the permission to full control {'>'} Apply</p>
                        </div>
                    </div>
                </div>
            </ArticleDetails>
            <Copyright />
        </>
    )
}

export default doc
