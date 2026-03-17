<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portifolio</title>
</head>
<body>
    <h1>
        <?php echo "Welcome to my Portfolio!"; ?>
    </h1>
    <p>
        <?php echo "João Victor é um desenvolvedor em formação com foco claro em back-end e uma base sólida construída principalmente com Django. Ele já ultrapassou o nível de iniciante, demonstrando capacidade de modelar bancos de dados relacionais complexos, converter estruturas legadas de MySQL para ORM, definir corretamente relacionamentos como ForeignKey e OneToOne e tomar decisões conscientes sobre regras de integridade como CASCADE e PROTECT. Seu trabalho não se limita a CRUD simples: ele lida com regras de negócio reais, controle de permissões por tipo de usuário, autenticação customizada baseada em campos não padrão e organização de arquivos vinculados a entidades de domínio, o que mostra compreensão prática de arquitetura e não apenas de código."; ?>
    </p>
    <p>
       <?php echo "No desenvolvimento web, atua como fullstack, mas com identidade técnica mais forte no back-end. No front-end utiliza HTML, CSS (com Tailwind) e JavaScript de forma funcional para suportar a aplicação, sem depender excessivamente de frameworks pesados, mantendo o foco na lógica do sistema. Ele entende o fluxo completo de uma aplicação web — requisição, processamento no servidor, acesso ao banco e renderização — e já pensa em separação de responsabilidades, estrutura de pastas e manutenibilidade, características que indicam maturidade acima da média para nível júnior."; ?>
    </p>
    <p>
        <?php echo "Além do desenvolvimento web, possui contato com fundamentos importantes de computação, como estruturas de dados em C (incluindo listas encadeadas e implementação de TADs), programação em Assembly x86 em modo real e noções de organização de baixo nível, o que fortalece sua compreensão sobre como o software funciona além dos frameworks. Também demonstra interesse em conceitos mais avançados, como embeddings, RAG e ecossistemas de IA, buscando entender não apenas o uso de ferramentas, mas o funcionamento por trás delas."; ?>
    </p>
    <p>
        <?php echo "Sua forma de aprender é orientada por curiosidade técnica e comparação entre tecnologias. Ele questiona diferenças de arquitetura (como linguagem versus framework), analisa trade-offs entre controle e produtividade e busca compreender o “porquê” das ferramentas, não apenas o “como”. Essa postura indica perfil analítico e potencial para evoluir bem em engenharia de software."; ?>
    </p>
    <p>
        <?php echo "Em termos de momento de carreira, já possui repertório prático equivalente a um júnior em início de trajetória, com pontos fortes em modelagem de domínio, back-end com Django e organização de sistemas baseados em regras reais. Os próximos passos naturais para seu crescimento seriam aprofundar testes automatizados, APIs REST mais robustas, padrões de projeto, performance de banco e deploy/infraestrutura, áreas que complementariam sua base atual e o levariam a um nível pleno mais rapidamente."; ?>
    </p>

    // Variaveis
    <p>
        <?php
            $nome = "João Victor";
            echo $nome;
        ?>
    </p>
    <p>
        <?php
            $profissao = "Desenvolvedor em formação";
            echo $profissao;
        ?>
    </p>
    <p>    
        <?php
            $foco = "Back-end com Django";
            echo $foco;
        ?>
    </p>
    <p>
        <?php
            $nivel = "Júnior em início de trajetória";
            echo $nivel;    
        ?>  
    </p>

    // concatenação
    <?php echo $nome . " é um " . $profissao . " com foco em " . $foco . " e atualmente se encontra no nível de " . $nivel; ?>
    <br>
    // condicionante
    <p>
        <?php
            $trabalhando = true;
            if ($trabalhando) {
                echo "Atualmente trabalhando em projetos práticos.";
            } else {
                echo "Em busca de oportunidades para aplicar conhecimentos.";
            }
        ?>
    </p>
</body>
</html>