import html2text

def convert_html_to_md(input_html_file, output_md_file):
    with open(input_html_file, "r", encoding="utf-8") as html_file:
        html_content = html_file.read()
    
    converter = html2text.HTML2Text()
    converter.ignore_links = False  # Mantiene los enlaces
    markdown_content = converter.handle(html_content)

    with open(output_md_file, "w", encoding="utf-8") as md_file:
        md_file.write(markdown_content)

    print(f"Conversión completada: {output_md_file}")

# Uso del script
convert_html_to_md("curar-rubrica\S2.5.2 Rubrica Actividad Implementación de Redes Neuronales Básicas en Google Colab.htm", "curar-rubrica\S2.5.2 Rubrica Actividad Implementación de Redes Neuronales Básicas en Google Colab.md")
