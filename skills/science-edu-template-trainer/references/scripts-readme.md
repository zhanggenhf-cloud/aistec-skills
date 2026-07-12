# 批量分析脚本说明

## 使用方法

```bash
# 分析单个方案
python3 analyze_activity.py path/to/activity.md

# 批量分析文件夹
python3 batch_analyze.py path/to/activities/folder/

# 生成模板
python3 generate_template.py --input analysis_results.json --output template.md
```

## 分析脚本功能

### analyze_activity.py
- 解析 Markdown 格式的活动方案
- 提取结构、元数据、教学流程
- 输出 JSON 格式的分析结果

### batch_analyze.py
- 批量处理多个方案文件
- 汇总统计分析
- 生成对比报告

### generate_template.py
- 从分析结果中提取模式
- 生成标准化模板
- 输出版本控制信息

## 输出文件

- `analysis_results.json`：每个方案的详细分析
- `summary_report.md`：统计分析摘要
- `template_v{X.Y.Z}.md`：生成的模板文件
