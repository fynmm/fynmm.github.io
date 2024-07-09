import{_ as s,o as n,c as a,S as l}from"./chunks/framework.f15d8f8c.js";const p="/assets/image-7.2bf5e0ac.png",e="/assets/image-20.69f6aa03.png",o="/assets/image-8.fa257427.png",r="/assets/image-9.7a236384.png",t="/assets/image-10.d51f3b3a.png",c="/assets/image-12.7c77320d.png",i="/assets/image-11.7a61170b.png",y="/assets/image-14.0281db09.png",D="/assets/image-15.cd7b933d.png",C="/assets/image-17.6cbe212d.png",A="/assets/image-18.fd7d0b75.png",b="/assets/image-19.877d2971.png",F="/assets/image-21.253ebe94.png",u="/assets/image-22.6baf8b46.png",w=JSON.parse('{"title":"Docker Jenkins 实现一键部署前端项目","description":"Docker,Docker安装,Jenkin,Jenkins安装,自动部署,前端项目,git,gitee,自动,部署","frontmatter":{"lang":"zh-CN","title":"Docker Jenkins 实现一键部署前端项目","description":"Docker,Docker安装,Jenkin,Jenkins安装,自动部署,前端项目,git,gitee,自动,部署","aside":false},"headers":[],"relativePath":"deploy/auto.md","filePath":"deploy/auto.md"}'),m={name:"deploy/auto.md"},h=l('<h1 id="docker-jenkins-一步步教会你实现一键部署前端项目" tabindex="-1">Docker Jenkins 一步步教会你实现一键部署前端项目 <a class="header-anchor" href="#docker-jenkins-一步步教会你实现一键部署前端项目" aria-label="Permalink to &quot;Docker Jenkins 一步步教会你实现一键部署前端项目&quot;">​</a></h1><h2 id="docker安装以及jenkins安装" tabindex="-1">Docker安装以及Jenkins安装 <a class="header-anchor" href="#docker安装以及jenkins安装" aria-label="Permalink to &quot;Docker安装以及Jenkins安装&quot;">​</a></h2><p><a href="/deploy/jenkins.html">安装请移步这里</a></p><h2 id="基本设置" tabindex="-1">基本设置 <a class="header-anchor" href="#基本设置" aria-label="Permalink to &quot;基本设置&quot;">​</a></h2><h3 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;Node&quot;">​</a></h3><p>先在 Dashboard-系统管理-插件管理-Available plugins 下载node插件; 然后 Dashboard-系统管理-全局工具配置- nodejs安装，设置个node版本; <img src="'+p+'" alt="Alt text"></p><h3 id="publish-over-ssh" tabindex="-1">Publish over SSH <a class="header-anchor" href="#publish-over-ssh" aria-label="Permalink to &quot;Publish over SSH&quot;">​</a></h3><p>Dashboard-系统管理-系统配置 <img src="'+e+'" alt="Alt text"></p><h2 id="任务" tabindex="-1">任务 <a class="header-anchor" href="#任务" aria-label="Permalink to &quot;任务&quot;">​</a></h2><h3 id="创建任务-选择自由风格" tabindex="-1">创建任务，选择自由风格 <a class="header-anchor" href="#创建任务-选择自由风格" aria-label="Permalink to &quot;创建任务，选择自由风格&quot;">​</a></h3><p><img src="'+o+'" alt="Alt text"></p><h3 id="源码管理-输入github-ssh地址。" tabindex="-1">源码管理,输入github ssh地址。 <a class="header-anchor" href="#源码管理-输入github-ssh地址。" aria-label="Permalink to &quot;源码管理,输入github ssh地址。&quot;">​</a></h3><p><img src="'+r+'" alt="Alt text"></p><h3 id="添加ssh凭证" tabindex="-1">添加ssh凭证 <a class="header-anchor" href="#添加ssh凭证" aria-label="Permalink to &quot;添加ssh凭证&quot;">​</a></h3><h4 id="腾讯服务器终端输入ssh-keygen-t-rsa" tabindex="-1">腾讯服务器终端输入<code>ssh-keygen -t rsa</code> <a class="header-anchor" href="#腾讯服务器终端输入ssh-keygen-t-rsa" aria-label="Permalink to &quot;腾讯服务器终端输入`ssh-keygen -t rsa`&quot;">​</a></h4><p><img src="'+t+'" alt="Alt text"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cat /.ssh/id_rsa // 作为key</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+c+'" alt="Alt text"><img src="'+i+'" alt="Alt text"></p><h4 id="github-右上角头像-设置" tabindex="-1">github-右上角头像-设置 <a class="header-anchor" href="#github-右上角头像-设置" aria-label="Permalink to &quot;github-右上角头像-设置&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cat /.ssh/id_rsa.pub // 添加ssh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+y+'" alt="Alt text"></p><h3 id="最后应该显示这样" tabindex="-1">最后应该显示这样 <a class="header-anchor" href="#最后应该显示这样" aria-label="Permalink to &quot;最后应该显示这样&quot;">​</a></h3><p><img src="'+D+'" alt="Alt text"></p><h3 id="构建触发器" tabindex="-1">构建触发器 <a class="header-anchor" href="#构建触发器" aria-label="Permalink to &quot;构建触发器&quot;">​</a></h3><p><img src="'+C+'" alt="Alt text"></p><h3 id="构建环境" tabindex="-1">构建环境 <a class="header-anchor" href="#构建环境" aria-label="Permalink to &quot;构建环境&quot;">​</a></h3><p>选择刚才添加的node环境 <img src="'+A+'" alt="Alt text"></p><h3 id="shell脚本" tabindex="-1">shell脚本 <a class="header-anchor" href="#shell脚本" aria-label="Permalink to &quot;shell脚本&quot;">​</a></h3><p>这里打包出来的dist还只是在jenkins路径里，如果jenkins和服务器是不同的服务器，那么还需要使用publish over ssh将dist发送到服务器。 <img src="'+b+`" alt="Alt text"></p><details class="details custom-block"><summary>点击查看shell脚本</summary><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># /usr/local/bin/npm run deploy</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># abort on errors</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> $PATH</span></span>
<span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># build</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">folder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./docs/.vitepress/dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 替换为你要删除的文件夹的实际路径  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$folder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$folder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文件夹已删除。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文件夹不存在。不用删除。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">source</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./dist</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$source</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$source</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist已删除。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist不存在。不用删除。</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;"> $folder $source</span></span>
<span class="line"><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./dist.tar.gz</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$filename</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$filename</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文件 </span><span style="color:#A6ACCD;">$filename</span><span style="color:#C3E88D;"> 已删除</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文件 </span><span style="color:#A6ACCD;">$filename</span><span style="color:#C3E88D;"> 不需要删除</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-czvf</span><span style="color:#A6ACCD;"> $filename $source</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">*</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$source</span><span style="color:#89DDFF;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div></details><h3 id="后续步骤" tabindex="-1">后续步骤 <a class="header-anchor" href="#后续步骤" aria-label="Permalink to &quot;后续步骤&quot;">​</a></h3><p>此时我们只是打完并压缩dist，然后我们需要发送包到服务器，选择图中的选项。 <img src="`+F+'" alt="Alt text"></p><h3 id="配置ssh-publishers" tabindex="-1">配置SSH Publishers <a class="header-anchor" href="#配置ssh-publishers" aria-label="Permalink to &quot;配置SSH Publishers&quot;">​</a></h3><p><img src="'+u+`" alt="Alt text"></p><details class="details custom-block"><summary>点击查看Exec command</summary><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/www/wwwroot/vitepress2</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$dir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$dir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$dir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">详情:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zxvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dist.tar.gz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$dir</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#rm -rf dist.tar.gz</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启Nginx</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin</span></span>
<span class="line"><span style="color:#FFCB6B;">./nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">重启完毕</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details><h2 id="服务器nginx设置" tabindex="-1">服务器nginx设置 <a class="header-anchor" href="#服务器nginx设置" aria-label="Permalink to &quot;服务器nginx设置&quot;">​</a></h2><h3 id="第4、6行高亮处需要修改" tabindex="-1">第4、6行高亮处需要修改 <a class="header-anchor" href="#第4、6行高亮处需要修改" aria-label="Permalink to &quot;第4、6行高亮处需要修改&quot;">​</a></h3><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">server</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen </span><span style="color:#F78C6C;">8081</span><span style="color:#A6ACCD;">;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">xx.xx.xx.xx</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> //腾讯服务器ip</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;">index.php index.html index.htm default.php default.htm default.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">/www/wwwroot/vitepress2/dist</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> //你的项目根目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#SSL-START SSL相关配置，请勿删除或修改下一行带注释的404规则</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#error_page 404/404.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#SSL-END</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#ERROR-PAGE-START  错误页配置，可以注释、删除或修改</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#error_page 404 /404.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#error_page 502 /502.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#ERROR-PAGE-END</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#PHP-INFO-START  PHP引用配置，可以注释或修改</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> include </span><span style="color:#A6ACCD;">enable-php-74.conf</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#PHP-INFO-END</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> include </span><span style="color:#A6ACCD;">/www/server/panel/vhost/rewrite/124.221.141.213.conf</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#REWRITE-END</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#禁止访问的文件或目录</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> ^/(\\.user.ini|\\.htaccess|\\.git|\\.env|\\.svn|\\.project|LICENSE|README.md)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">404</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#一键申请SSL证书验证目录相关设置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\\.well-known</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> allow </span><span style="color:#A6ACCD;">all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#禁止在证书验证目录放入敏感文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> ( </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">~ </span><span style="color:#C3E88D;">&quot;^/\\.well-known/.*\\.(php|jsp|py|js|css|lua|ts|go|zip|tar\\.gz|rar|7z|sql|bak)$&quot;</span><span style="color:#A6ACCD;"> ) </span><span style="color:#F07178;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">403</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> .*\\.(gif|jpg|jpeg|png|bmp|swf)$</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">{</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#89DDFF;"> expires </span><span style="color:#F07178;">     </span><span style="color:#F78C6C;">30d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#89DDFF;"> error_log </span><span style="color:#F07178;">/dev/null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#89DDFF;"> access_log </span><span style="color:#F07178;">/dev/null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> .*\\.(js|css)?$</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">{</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#89DDFF;"> expires </span><span style="color:#F07178;">     </span><span style="color:#F78C6C;">12h</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#89DDFF;"> error_log </span><span style="color:#F07178;">/dev/null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">       </span><span style="color:#89DDFF;"> access_log </span><span style="color:#F07178;">/dev/null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> access_log </span><span style="color:#A6ACCD;"> /www/wwwlogs/124.221.141.213.8080.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> error_log </span><span style="color:#A6ACCD;"> /www/wwwlogs/124.221.141.213.8080.error.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><p><a href="https://juejin.cn/post/7000534516410351646" target="_blank" rel="noreferrer">Jenkins通过Publish Over SSH实现前端项目部署到远程服务全纪录</a></p>`,40),d=[h];function g(f,q,E,k,_,x){return n(),a("div",null,d)}const P=s(m,[["render",g]]);export{w as __pageData,P as default};
