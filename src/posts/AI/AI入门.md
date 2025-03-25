---
title: AI 入门
icon: fa-solid fa-ghost
cover: https://fastcdn.mihoyo.com/content-v2/hk4e/127666/735ef5e574015e24007c466ae9ada7b4_5255747087009988189.png
date: 2025-02-07
lastUpdated: true
order: 1
isOriginal: true
author: 
    - name: xuyong
      url: https://github.com/coder-xuyong
category:
  - AI
tag:
  - AI
  - deepseek
sticky: false
star: true
---

# AI 入门

>  基础的 AI 知识，作为了解使用

## 了解 AI 领域的树形结构
```shell
人工智能（Artificial Intelligence）
├─ **1. 机器学习（Machine Learning）**
│  ├─ 监督学习（Supervised Learning）
│  │  ├─ 回归（Regression）
│  │  └─ 分类（Classification）
│  ├─ 无监督学习（Unsupervised Learning）
│  │  ├─ 聚类（Clustering）
│  │  └─ 降维（Dimensionality Reduction）
│  ├─ 强化学习（Reinforcement Learning）
│  │  ├─ 马尔可夫决策过程（MDP）
│  │  └─ 深度强化学习（Deep RL）
│  └─ 深度学习（Deep Learning）
│     ├─ 卷积神经网络（CNN）
│     ├─ 循环神经网络（RNN）
│     └─ 生成对抗网络（GAN）
│
├─ **2. 自然语言处理（Natural Language Processing, NLP）**
│  ├─ 语音识别（Speech Recognition）
│  ├─ 文本生成（Text Generation）
│  ├─ 机器翻译（Machine Translation）
│  └─ 情感分析（Sentiment Analysis）
│
├─ **3. 计算机视觉（Computer Vision）**
│  ├─ 图像分类（Image Classification）
│  ├─ 目标检测（Object Detection）
│  ├─ 图像分割（Image Segmentation）
│  └─ 视频分析（Video Analysis）
│
├─ **4. 知识表示与推理（Knowledge Representation & Reasoning）**
│  ├─ 本体论（Ontology）
│  ├─ 知识图谱（Knowledge Graph）
│  └─ 逻辑推理（Logical Reasoning）
│
├─ **5. 规划与决策（Planning & Decision Making）**
│  ├─ 自动规划（Automated Planning）
│  ├─ 博弈论（Game Theory）
│  └─ 多智能体系统（Multi-Agent Systems）
│
├─ **6. 机器人学（Robotics）**
│  ├─ 运动控制（Motion Control）
│  ├─ 路径规划（Path Planning）
│  └─ 人机协作（Human-Robot Interaction）
│
├─ **7. 专家系统（Expert Systems）**
│  ├─ 规则引擎（Rule-Based Systems）
│  └─ 推理机（Inference Engine）
│
├─ **8. 进化计算（Evolutionary Computation）**
│  ├─ 遗传算法（Genetic Algorithms）
│  ├─ 遗传编程（Genetic Programming）
│  └─ 群体智能（Swarm Intelligence）
│
├─ **9. 其他重要领域**
│  ├─ 模糊逻辑（Fuzzy Logic）
│  ├─ 认知计算（Cognitive Computing）
│  └─ 自动推理（Automated Reasoning）
│
└─ **10. 交叉领域**
   ├─ 神经符号人工智能（Neuro-Symbolic AI）
   └─ 可解释AI（Explainable AI, XAI）
```

目前为止（2025-01-07），市场上的 deepseek 和 ChatGPT 都是属于 自然语言处理 和 机器学习中的深度学习 等。

## 深度学习概念关系金字塔
```shell
    人工智能（AI）
        ↓
    机器学习（ML）
        ↓
    神经网络（NN）
        ↓
    深度学习（DL）
```
机器学习是AI的一个子领域


## AI 学习计划

deepseek 生成的学习计划，可作参考：

### **一、短期目标（1-3个月）：掌握机器学习核心能力**
#### **学习重点**
1. **机器学习理论强化**  
   - 深入理解监督学习三要素：**模型（假设空间）→ 策略（损失函数）→ 算法（优化方法）**
   - 推导经典算法：从线性回归的闭式解到逻辑回归的梯度下降
   - 掌握评估指标：精确率/召回率、ROC-AUC、F1-Score

2. **Scikit-learn深度实践**  
   - 完整实现机器学习流水线：特征工程（One-Hot编码、标准化）→ 模型训练 → 超参数调优（GridSearchCV）
   - 挑战Kaggle经典比赛：Titanic生存预测、房价预测

3. **数学工具升级**  
   - 矩阵微积分：理解梯度∇在反向传播中的作用
   - 概率编程：用NumPy实现EM算法或朴素贝叶斯

#### **项目建议**
- 用随机森林预测学生成绩（数据：UCI Student Performance）
- 手写K-Means聚类算法（不用第三方库）

---

### **二、中期目标（3-6个月）：攻破深度学习与实战**
#### **学习重点**
1. **神经网络原理推导**  
   - 从零实现一个3层MLP（含反向传播推导）
   - 理解梯度消失问题 → 用Xavier初始化解决

2. **PyTorch/TensorFlow实战**  
   - 掌握张量操作、自动微分、Dataset/Dataloader
   - 复现经典模型：LeNet-5（MNIST）、ResNet-18（CIFAR-10）

3. **领域专项突破**  
   - **CV方向**：学习CNN架构设计（感受野计算、跳跃连接）
   - **NLP方向**：实现Word2Vec → Transformer位置编码

#### **项目建议**
- 用CNN实现COVID-19胸片分类（Kaggle数据集）
- 基于LSTM的股票价格预测（注意处理时序数据泄露）

---

### **三、长期目标（6-12个月）：前沿探索与系统工程**
#### **学习重点**
1. **高级模型架构**  
   - 生成对抗网络（GAN）：实现DCGAN生成人脸
   - Transformer进阶：BERT微调（Hugging Face库）
   - 图神经网络（GNN）：用PyG处理社交网络数据

2. **模型部署与优化**  
   - ONNX模型格式转换 → 用Flask部署API
   - 模型压缩技术：知识蒸馏、量化（TensorRT）

3. **论文复现与创新**  
   - 精读经典论文（如ResNet、Attention Is All You Need）
   - 在GitHub创建个人项目库，尝试改进现有模型

#### **项目建议**
- 部署一个实时风格迁移Web应用
- 复现YOLOv3目标检测模型（COCO数据集）

---

### **四、学习资源精准推荐**
#### **理论强化**
- 《机器学习》（周志华西瓜书）→ 配合公式推导
- CS229（吴恩达斯坦福课程）→ 数学视角的ML
- 《Deep Learning》（Goodfellow）→ 重点读前5章

#### **实践利器**
- Kaggle Courses（免费微课程，含实战练习）
- Fast.ai（面向实践的代码驱动教学）
- Papers With Code（论文+代码一站式资源）

#### **工具栈**
- 开发环境：VS Code + Jupyter Lab
- 版本控制：Git + DVC（数据版本控制）
- 实验管理：MLflow或Weights & Biases

---

### **五、关键避坑策略**
1. **避免"调参陷阱"**：每次调参前先问为什么（如学习率调整需结合Loss曲线分析）
2. **数学不要死磕**：遇到复杂推导时，先理解几何意义再回看公式（如SVM对偶问题的物理意义）
3. **保持代码规范**：从早期开始使用Type Hints和Docstring，推荐遵循PEP 582
4. **硬件利用技巧**：免费资源优先（Google Colab Pro → AWS Educate学生优惠）

---

### **六、职业发展衔接**
1. **作品集构建**  
   - GitHub：包含3个高质量项目（1个ML传统项目 + 1个DL项目 + 1个部署项目）
   - 技术博客：用Markdown记录学习笔记（推荐GitHub Pages托管）

2. **竞赛与社区**  
   - 定期参加Kaggle（至少拿到1个银牌）
   - 参与AI顶会（NeurIPS/ICML）的OpenReview评审

3. **岗位准备**  
   - 机器学习工程师：重点刷LeetCode中等难度题（特别是数组和树相关）
   - 研究岗位：精读3-5篇顶会论文并复现代码

---

### **学习节奏建议**
- **每日**：1小时理论学习 + 2小时代码实践
- **每周**：完成一个Kaggle Notebook或小型项目
- **每月**：复现一篇论文的核心方法

按照这个路径，12个月后可达到：  
✅ 独立完成端到端的AI项目开发  
✅ 掌握工业级模型优化技巧  
✅ 具备参与AI科研或工程岗位的竞争力