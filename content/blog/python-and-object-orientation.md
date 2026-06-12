---
title: "Python and Object Orientation"
date: 2023-01-3
category: "Object Orientation"
image: "/images/blog/python-and-object-orientation/python-and-object-orientation.png"
published: t
author_id: 1
---

# Python and Object Orientation

**Data:** 2023-01-31

## Resumo

Aprenda Programação Orientada a Objetos, e torne seus algoritmos mais claros e reutilizáveis.

## Conteúdo

Desenvolvimento de software é um área incrível, na qual um desenvolvedor tem a possibilidade de criar qualquer solução técnológica através de algoritmos. Mas para que isto seja possível é necessário conhecer alguns conceitos fundamentais desta área, que vão além de linguagens de programação, conceitos universais como lógica de programação e orientação a objetos, o último sendo o assunto abordado nesse artigo.

Ao decorrer será apresentado os principais conceitos de programação orientada a objetos, POO, e exemplos de implementações na linguagem de programação Python, que é extremamente utilizada pelo mercado atualmente. [POO](https://www.youtube.com/watch?v=QY0Kdg83orY&ab_channel=C%C3%B3digoFonteTV) é um conceito idealizado para representar qualquer coisa tangível do mundo real, através de algoritmos.

Este paradigma de programação, permite o reuso de muito código evitando repetições desnecessárias, POO é um dos pré-requisitos para estudar assuntos como [design patterns](https://youtu.be/J-lHpiu-Twk), pois dentro da orientação a objetos, se utiliza muita classe, o que torna o código muito verboso, dificultando a compreensão e os testes, e neste momento os designs patterns são muito úteis para a resolução destes problemas.

Classe é o que permite representar objetos tangíveis do mundo real através de algoritmos, sendo as suas caracteríticas representadas por atributos e suas ações como métodos. Para ficar mais simples estes conceitos, imagine uma moto, existem diversas cores e motorizações diferentes, entretanto todas são motos.

Desta forma, a sua classe tem que representar uma moto de forma genérica, para que qualquer moto possa ser representada por ela, sendo assim a sua classe se torna um molde. Assim como um molde de biscoito, na qual podem ser assados biscoitos de sabores diferentes utilizando o mesmo molde.

Abaixo segue uma classe em Python, que representa uma moto:

```python
class Motorbike:
   def __init__(self, model: str, year: int, power: int) -> None:
       self.model = model
       self.year = year
       self.power = power

   def start(self) -> None:
       print("Starting the Motorbike!")

   def stop(self) -> None:
       print("Stopping the Motorbike")
```


## Instanciando a classe Motorbike no módulo main.

```python
if __name__ == "__main__":
   p = Motorbike("MT07", 2023, 700)
   p.start()
   print(p.year, p.power)
```


O método __init__ é o construtor da classe, ele permite instanciar novos objetos a partir da classe, nele é informado todos os atributos para criar um novo objeto. Start e stop são métodos, eles permitem a execução de ações no objeto moto instanciado, neste caso elas permitem ligar e desligar a respectiva moto.

Se você desconhece a sintaxe de como escrever classes em Python, recomendo a leitura do [capítulo 17: Classes e métodos, do livro Pense em Python](https://penseallen.github.io/PensePython2e/17-classes-metodos.html), ele oferece uma excelente base sobre o assunto.

## Encapsulamento

Este é o primeiro dos quatro princípios da orientação a objetos, ele diz respeito à possibilidade da classe tornar privado métodos e atributos, ou protected, a fim de proteger contra modificações externas. Imagine uma conta bancária na qual o usuário poderia alterar o seu saldo a partir do caixa eletrônico, com certeza não daria certo, pois esta funcionalidade deve ser restrita, e somente métodos específicos devem ter acesso a estes recursos.

Pode ser feita a analogia da seguinte forma, imagine que você deseja ligar o farol da sua moto, você não precisa saber em detalhes como isto funciona, apenas executa a função de ligar, toda a complexidade é abstraída através de um clique, e é isto que este princípio permite.

Na POO, todo este trabalho é realizado apenas chamando um método da função, o usuário não precisa saber como isto funciona em detalhes, apenas o desenvolvedor. Para ter métodos e atributos privados no Python, utiliza-se dois _, desta forma __privado, antes das suas declarações, para utilizar o protected utiliza–se somente um _, assim _variable. Isto é uma convenção, não significa que realmente é privado, como acontece no Java e Kotlin, apenas é um alerta que o desenvolvedor não deve executar estes métodos ou acessar estas variáveis fora da sua respectiva classe.

Além disso, você pode utilizar metodos getters e setters para adicionar e ler atributos de uma istância de objeto, se você vem do Java conhece perfeitamente este conceito, pois lá ele é muito presente. No Python você declara um metodo com o mesmo nome do atributo que deseja realizar o setter e o getter, e depois adiciona um decorator, com ```@property``` para realizar o getter e ```@atributo.setter`` a fim de realizar o setter do atributo.

Segue abaixo um exemplo em Python utilizando este principio.

```python
class Motorbike:
   def __init__(self, model: str, year: int, power: int) -> None:
       self.model = model
       self.__year = year
       self.power = power

   def start(self) -> None:
       if self._verifyGasoline:
           print("Starting the Motorbike!")
       print("No gasoline")

   def stop(self) -> None:
       print("Stopping the Motorbike")

   def _verifyGasoline(self) -> bool:
       return False

   @property
   def year(self) -> str:
       return self.__year

   @year.setter
   def year(self, valor: int) -> None:
       self.__year = valor

if __name__ == "__main__":
   p = Motorbike("MT07", 2023, 700)
   print(p.year)
   p.start()
   print(p.model, p.power)
```


## Herança

Conceito muito utilizado por frameworks como o Django, ele permite que através de uma classe Pai, ou mais genérica, seja herdado métodos e atributos que podem ser utilizados por outras classes filhas, mais específicas.

Dentro do Django, o principal framework Python para a Web, este conceito pode ser encontrado nos models, que permite criar a tabela e os campos do banco de dados, através de uma classe Python, que herda da classe ```django.db.models```.

Abaixo segue um exemplo de herança em Python, esta classe irá herdar da classe Motorbike, que será a classe Pai, declarada anteriormente nos outros exemplos, e partir desta classe, será criada a classe Yamaha, que conterá um novo método para objetos instanciados a partir desta classe.

```python
from motorbike import Motorbike

class Yamaha(Motorbike):
   def new_engine(self):
       print("New engine with more power and torque.")

if __name__ == "__main__":
   mt_09 = Yamaha("MT09",2023, 823)
   mt_09.new_engine()
```


## Interface

Não há implementação de interfaces no Python como no Java e Kotlin, mas podemos utilizar [classes abstratas](https://www.treinaweb.com.br/blog/classes-abstratas-vs-interfaces) no Python, o que soluciona perfeitamente este possível impedimento. O recurso de interface, permite que haja uma classe que seja utilizada apenas como um contrato, na qual não há implementação de métodos, apenas a assinatura dos respectivos métodos, que podem ser implementados de maneira diferente nas classes que implementam a interface. Uma classe abstrata não deve ser instanciada, apenas implementada.

Abaixo segue um exemplo de classes abstratas em Python.

```python
from abc import ABC, abstractmethod

class IMotorbike(ABC):
   @abstractmethod
   def start(self) -> None:
       raise NotImplemented

   @abstractmethod
   def stop(self) -> None:
       raise NotImplemented


class Honda(IMotorbike):
   def __init__(self, nome) -> None:
       self.nome = nome

   def start(self) -> None:
       print(f"Ligou a moto {self.nome}")

   def stop(self) -> None:
       print(f"Desligou a moto {self.nome}")


if __name__ == "__main__":
   h = Honda("01")
   h.start()
   h.stop()
```
<br>

O import realizado é de módulos nativos do Python, eles permitem criar implementações de classes abstratas. É utilizado decorator para definir um método como abstrato, e a classe que será utilizada como interface herda de ABC, o I antes do nome da interface é apenas para todos os desenvolvedores da equipe terem ciência que se trata de uma implementação de interface.

## Polimorfismo

Este recurso, possibilita que uma classe que implementa uma interface, possua metodos com a mesma assinatura, entretanto, podem ser implementados de formas diferentes. Deste modo é possível que classes que se referem a motos diferentes, a partir de uma mesma interface, possuam limites de velocidade distintos, entretanto no final o tipo de resultado será igual, a velocidade final da respectiva moto.

Abaixo segue um exemplo em Python.

```python
from motorbike_int import IMotorbike

class NewMoto(IMotorbike):
   def __init__(self, nome) -> None:
       self.__nome = nome

   def start(self) -> None:
       print("Traveling at 200 km/h")

   def stop(self) -> None:
       print("No break!!!")

   @property
   def nome(self) -> str:
       return self.__nome

   @nome.setter
   def nome(self, valor: str) -> None:
       self.__nome = valor


class OldMoto(IMotorbike):
   def __init__(self, nome) -> None:
       self.__nome = nome

   def start(self) -> None:
       print("Traveling at 150 km/h")

   def stop(self) -> None:
       print("Stopping")

   @property
   def nome(self) -> str:
       return self.__nome

   @nome.setter
   def nome(self, valor: str) -> None:
       self.__nome = valor


if __name__ == "__main__":
   nwm = NewMoto("Moto 2024")
   print(nwm.nome)
   nwm.nome
   nwm.start()
   nwm.stop()
   print()
   old = OldMoto("Moto 1975")
   print(old.nome)
   old.start()
   old.stop()
```


## Finalizando

Este artigo apresentou de maneira bem clara, simples e objetiva os fundamentos da Programação Orientada a Objetos, seus quatro princípios, fundamentos e implementações utilizando Python. É fundamental que um desenvolvedor conheça este assunto, independentemente da linguagem que utiliza.

Irei adicionar abaixo algumas referências sobre este assunto. Os algoritmos desenvolvidos estão disponíveis neste repositório do github: [luisgs7/py-step-by-step](https://github.com/luisgs7/py-step-by-step). Qualquer dúvida me manda uma mensagem no Linkedin ou por e-mail na página de contatos. Sucesso.

## Referências

- [Os 4 pilares da Programação Orientada a objetos.](https://www.devmedia.com.br/os-4-pilares-da-programacao-orientada-a-objetos/9264)
- [Programação Orientada a Objetos.](https://www.alura.com.br/artigos/poo-programacao-orientada-a-objetos)
- [Python 3 - Avançando na Orientação a Objetos](https://www.alura.com.br/conteudo/python-3-avancando-orientacao-objetos).
- [Como Funciona a Orientação a objetos em Python.](https://www.youtube.com/watch?v=ffmMAqCn678&t=190s&ab_channel=Codifike)
- [Implementing an Interface in Python.](https://realpython.com/python-interface/)
