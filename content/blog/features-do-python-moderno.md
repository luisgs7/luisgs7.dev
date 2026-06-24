---
title: "Features do Python Moderno"
date: 2022-07-25 09:00:00+00
category: "Onde o Python é Utilizado #01"
image: "/images/posts/features-do-python-moderno.jpeg"
published: t
author_id: 1
---

# Features do Python Moderno

**Data:** 2022-07-25

## Resumo

Conheça os principais recursos do Python Moderno.

## Conteúdo

Python é uma das linguagens de programação mais conhecidas e utilizadas atualmente, seja por uma startup no interior do Brasil, ou pelo Instagram :0. Isto apresenta a sua imensa versatilidade, e também os diferentes tipos de mercado em que atua. Assim como qualquer tecnologia, uma linguagem de programação precisa ser atualizada sempre, ficar parada sem atualização, pode significar o fim de milhares de projetos em todo o mundo.

E em relação a atualização, o Python realiza esta atividade com maestria, nas últimas versões muitos recursos novos foram adicionados, melhoria de performance, e correção de bugs foram realizados, além de melhorias relacionadas à segurança. Recomendo que você leia sempre a documentação do seu framework, ou linguagem de programação que utiliza, para se manter sempre atualizado, a fim de usufruir dos melhores recursos disponíveis. Durante as pesquisas realizadas para escrever este artigo, foi possível conhecer muitos recursos novos, espero que você goste das principais features que o python possui nas suas últimas versões, e que seja possível utilizá-las no seu trabalho.

Neste artigo irei apresentar as funcionalidades que acredito serem as mais relevantes para um desenvolvedor, cientista de dados, engenheiro de machine learning, engenheiro de deep learning, engenheiro de dados, engenheiro DevOps ou outro profissional que utilize o Python no seu trabalho. É importante destacar que existem diversos outros recursos que foram adicionados ao Python nas suas últimas versões, mas este artigo tem como objetivo sintetizar apenas alguns “destacados como mais importantes”.

Todos os algoritmos apresentados neste artigo, estão disponíveis neste repositório: [https://github.com/luisgs7/python-2022](https://github.com/luisgs7/python-2022), como alguns códigos são da versão mais recente do Python, a 3.10, e muitos sistemas operacionais têm versões anteriores instaladas, este projeto está utilizando um container docker, desta forma é necessário que você possua o [docker](https://docs.docker.com/engine/install/), e [docker compose](https://docs.docker.com/compose/install/) instalado em seu computador. Todas as instruções para executar o projeto estão no [README.md](https://github.com/luisgs7/python-2022/blob/main/README.md) do repositório. Tendo dúvidas, adicione uma issue ao projeto, ou um comentário no artigo, assim que possível irei responder.

## #1 - [Dataclass](https://docs.python.org/pt-br/3.7/library/dataclasses.html#dataclasses.dataclass)

Este recurso foi adicionado na versão 3.7, e permite que através de [decorators](https://docs.python.org/pt-br/3.7/glossary.html#term-decorator) sejam adicionados métodos especiais de forma automática a classes Python. Este método procura fields dentro da classe, que no caso seriam atributos da classe que possuem [anotação de tipos](https://docs.python.org/pt-br/3.7/glossary.html#term-variable-annotation), e já adiciona de forma automática métodos dunder, além de construtor.

Exemplo de Dataclass abaixo.

```python
from dataclasses import dataclass

@dataclass()
class Person:
   name: str
   age: int = 1
```

A primeira etapa a ser realizada é importar o módulo dataclass como apresentado na linha 1, não é necessário instalar nenhum pacote, este módulo é nativo do Python.

Em seguida basta criar a classe com a sintaxe padrão do Python, somente adicionando o decorator @dataclass, além dos fields da classe, que neste caso é “name” e “age”, em seguida, adicione o typing aos fields, você pode de forma opcional adicionar um valor default, como no caso de age.

Agora já é possível instanciar um objeto Person com os respectivos campos, como informado abaixo, sendo que o construtor já está configurado pelo dataclass.

```python
person = Person("Pedro", 22)
```

E você já tem disponível diversos métodos adicionados de forma padrão, como este:

```python
person.__str__()
```

Na documentação apresenta mais métodos disponíveis, recomendo muito a leitura.

## #2 - [Enum](https://docs.python.org/3.7/library/enum.html#enum.Enum)

Recurso adicionado no Python 3.4, se você conhece Java, assim como eu :), já deve ter utilizado este recurso, ele funciona de forma semelhante. O Enum permite a criação de valores constantes enumerados, isto significa que assim como você utiliza uma classe para instanciar objetos com os atributos que você definiu. Através da herança da classe Enum, você pode instanciar valores com um tipo definido por você :0, o que permite inúmeras possibilidades.

Exemplo de Enum abaixo.

```python
from enum import Enum

class City(Enum):
   GOIANIA = 1
   SALVADOR = 2
   BELEM = 3
```

Primeiramente você importa o módulo Enum, ele é nativo do Python, em seguida define a classe e a sua herança a partir da classe Enum, que foi importada. Adiante é adicionado os campos desta classe, no formato de constantes, por isso é maiúsculo, é uma prática recomendada no Python. Agora você já pode utilizar este recurso.

```python
for city in City:
    print(city)
```

Neste exemplo é impresso da seguinte forma.

```python
City.GOIANIA
City.SALVADOR
City.BELEM
```

Caso você precise acessar somente o nome da variável, pode utilizar desta forma abaixo.

```python
for city in City:
    cidade = city.name
    print(cidade)
```

Basta substituir o nome das variáveis para o seu caso de uso.

## #3 - [F-String](https://docs.python.org/3.6/reference/lexical_analysis.html#f-strings)

Um dos recursos que mais utilizo diariamente, foi adicionado na versão 3.6 do Python e já é amplamente utilizado, entretanto, muitos desenvolvedores ainda desconhecem, por isso o artigo o apresenta. F-String possibilita que dentro da função print() do Python, seja possível apresentar valores de variáveis, realizar funções básicas de forma muito elegante e clara para o desenvolvedor.

Exemplo de F-String abaixo.

```python
count: int = 10
print(f"Count {count-1}")
```

Na primeira linha define uma variável chamada count e atribui o valor 10, na segunda é utilizado o recurso da F-String, primeiro você adiciona a letra f antes das aspas, dentro da função print() e no momento em que você deseja apresentar a variável que você definiu, basta adicioná la entre chaves, podendo inclusive realizar operações, como a de subtração que realizei da variável count. Este recurso ajuda muito no processo de debug de um algoritmo, por exemplo.

## #4 - [Typing](https://docs.python.org/3.6/library/typing.html#module-typing)

Considero este recurso com um dos mais interessantes do Python moderno, pois ele apresenta uma novidade que já é utilizada por frameworks modernos como o [FastApi](https://fastapi.tiangolo.com/), a possibilidade de adicionar “dicas” de tipos a variáveis dentro do Python. Entretanto é importante destacar que isto não significa que o Python se tornou uma linguagem fortemente tipada, significa apenas que ela agora possibilita que você adicione dicas. Este recurso facilita o autocomplete, principalmente se você utiliza IDEs como o [vscode](https://code.visualstudio.com/) e [pycharm](https://www.jetbrains.com/pt-br/pycharm/), facilita a utilização de funções e classes, pois diminui erros relacionados a enviar parâmetros de tipos incorretos para estes recursos.

Exemplo de Typing abaixo.

```python
from typing import List, Tuple

def type_app(values: List[int], count: Tuple[float]):
    print(values)
    print(count)
```

Primeiramente é realizado o import de alguns Typing, em seguida é criada uma função que utiliza estes Typing importados, e alguns outros que já estão disponíveis por padrão no Python. Desta forma, quando você realizar o import deste módulo em outro arquivo fica muito mais fácil saber que tipo de dado é necessário para executar a função, o que se torna uma documentação do software de forma indireta, auxiliando assim toda a equipe de desenvolvedores. Para você conhecer todos os recursos do Typing recomendo a leitura da [documentação](https://docs.python.org/3.6/library/typing.html#module-typing).

## #5 - [The Walrus Operator](https://docs.python.org/3.8/whatsnew/3.8.html)

Esta é uma feature do Python 3.8, acredito que pouco conhecida, pois não a vi em nenhum algoritmo pela internet :0. Ela possui este nome pois a sua sintaxe se assemelha segundo a documentação, aos olhos e presas de uma morsa. Entretanto, por mais que não seja muito conhecida, tem casos de uso em que ela é muito relevante, e a planejo utilizar em meus projetos. Esta funcionalidade possibilita que dentro de uma expressão o valor seja atribuído a uma variável de forma muito elegante, utilizando o novo operador “:=”.

Exemplo de The Walrus Operator abaixo.

```python
from typing import List

def walrus_operator(index: List[int]) -> None:
   if(a := len(index)) > 2:
       print(f"Esta lista contém:{a} números")
   elif(a := len(index)) < 2:
       print(f"Esta lista possui:{a} números")
   else:
       print(f"Esta lista tem: {len(index)} números")
```

Neste exemplo é realizado primeiramente o import do Typing List, que é utilizado para sugerir os tipos dos parâmetros da função, assim como apresentado anteriormente. Na quarta linha, a condicional if utiliza o The Walrus Operator “:=”, que recebe o valor do tamanho extraído pela função len da lista obtida como parâmetro da função, e é utilizado posteriormente dentro da função print( ), para apresentar o tamanho da lista. No else, na penúltima linha é utilizado a função len() dentro da f-string, para apresentar o tamanho da lista, sendo que era desta forma que era feita antes deste novo operador. Perceba, que utilizando este novo operador se torna muito mais claro e simples o algoritmo.

## #6 - [Pattern matching](https://docs.python.org/3.10/whatsnew/3.10.html)

Este novo recurso foi adicionada no Python 3.10, atualmente no momento em que escrevo este artigo, a versão mais recente estável é a 3.10.5. Esta novidade permite utilizar no Python uma nova sintaxe para condicionais, muito semelhante com a switch case de outras linguagens, como o Java. Realmente era algo que particularmente me incomodava no Python, pois diversas outras linguagens que conheço como C, possuem este recurso e se torna um caso de uso muito interessante em situações específicas, principalmente quando as condicionais possuem poucas alternativas, o que torna o código mais simples e de fácil leitura.

Exemplo de The Pattern matching abaixo.

```python
def match_func(var: int):
   match var:
       case 1:
           print(f"{var}--One")
       case 2:
           print(f"{var}--Two")
       case 3:
           print(f"{var}--three")
       case _:
           print("Outro número.")
```

A utilização de The Pattern matching está dentro de uma função neste caso, mas não há esta necessidade. Ela recebe um valor inteiro como parâmetro, é adicionado ao operador Pattern matching, e de acordo com o valor correspondente imprime uma mensagem.

Na segunda linha é adicionado a palavra reservada “match” com a variável que planejo verificar o valor à sua direita, seguida dos dois pontos. Em seguida utiliza-se a palavra reservada “case” seguida de um valor que pode ser o valor da variável “var”, abaixo de cada instrução case, há um bloco de código com uma mensagem de print(), que será executada caso seja o valor correspondente. Entretanto, esta mensagem pode ser substituída por qualquer outra instrução que o usuário preferir.

Caso nenhum dos cases sejam satisfeitos, o último case, que possui o operador curinga “_”, será satisfeito e a sua instrução será executada. Este operador possui a mesma função que o “default” do java e de outras linguagens, como uma alternativa caso nenhuma outra condição anterior seja satisfeita, ela será.

## Conclusão

Espero que tenha conhecido alguma nova funcionalidade que possa utilizar em seus projetos, e que permita o desenvolvimento de algoritmos mais claros e legíveis, além disso, recomendo muito a leitura da documentação de cada feature apresentada, pois há muitas outras informações relevantes. Espero que você possa utilizar alguns destes novos recursos do Python em seus projetos. Lembre-se, os algoritmos apresentados estão disponíveis no github: [https://github.com/luisgs7/python-2022](https://github.com/luisgs7/python-2022). Caso tenha alguma dúvida, ou sugestão para um artigo, deixe nos comentários, caso queira entrar em contato, mande uma mensagem pelo [Linkedin](https://www.linkedin.com/in/lu%C3%ADs-gustavo-8632181a3/), um ótimo dia.
