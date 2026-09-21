# König 文游 V12（第四章《斯卡兰》＋V11.1稳定存档系统）

已加入第四章全部正文、A/B分支、数值和黑屏回标题，已同步最新剧本两个 BAD END 的措辞。
第三章末节点 `ch3_morning_017` 的 ID 保留，只把 next 从 `current_version_end` 改为 `chapter4_intro`。
旧有 333 个节点 ID 均保留；保存格式 `SAVE_VERSION=1` 及 localStorage 键名均不变。

## 新增素材文件：仅5个，需你自行添加（压缩包不包含原始媒体）
- assets/backgrounds/chapter4-snow.jpg：风雪、行军
- assets/backgrounds/chapter4-tent.jpg：室内军帐
- assets/backgrounds/chapter4-war.jpg：黎明战场
- assets/audio/chapter4-music1.mp3：风雪开始；到军帐只换画面、不换歌、不从头播放。
- assets/audio/chapter4-music2.mp3：剧本原“音乐3”，战场开始播放。

三张 JPG、两首 MP3 都要放入上述文件夹并按上述文件名保存，大小写、扩展名要一致。
若素材还不是 jpg/mp3，必须实际导出或转换成相应格式，不能只改后缀。

## 更新和存档
- 新网址第一次发布会产生一套新存档。此后继续使用**完全相同的网址**更新时，存档仍留在该网址的浏览器 localStorage。
- 不要改已经发布的剧情节点 ID，不要只因加章而升级 SAVE_VERSION。
- `stable-node-ids.json` 已记录到第四章全部 ID。
- 每次更新需改 index.html 的资源版本号，且务必检查网站发布是否完成。
- 本版 JS 与故事节点测试：`node tests/check-saves.js`。
- 实际手机上播放声音还需允许浏览器音频权限；图片/音乐需要真正添加进 assets 才能听到/看到。
