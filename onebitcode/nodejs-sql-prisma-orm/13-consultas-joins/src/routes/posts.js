const { Router } = require("express");
const prisma = require("../database");

const router = Router()

router.get("/", async (req, res) => {
    const posts = await prisma.post.findMany({
        orderBy: { createdAt: "desc" }
    })
    res.json(posts)
})

router.post("/", async (req, res) => {
    const newPost = await prisma.post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            published: req.body.published,
            authorId: req.body.authorId,
            tags: {
            connect: req.body.tags
            }
        }
    });
    res.status(201).json(newPost);
});

router.get("/:id", async (req, res) => {
    const post = await prisma.post.findUnique({
        where: { id: Number(req.params.id) },
        include: {
            author: true,
            tags: true
        }
    })
    res.json(post)
  })

// Rota para pesquisar posts através de filtragem
router.get("/search", async (req, res) => {
	// Começamos extraindo os parâmetros de query da URL
    const { title, authorId, published, startDate, endDate } = req.query;

    // Construímos o objeto de filtragem dinamicamente
    const filter = {};

    if (title) {
        filter.title = {
        contains: title,
        // Opcionalmente, também podemos buscar sem diferenciar maiúsculas e minúsculas
        mode: "insensitive"
        };
    }

    if (authorId) {
        filter.authorId = +authorId;
    }

    if (published) {
        filter.published = published === "true";
    }

    if (startDate || endDate) {
        filter.createdAt = {};
        if (startDate) {
        filter.createdAt.gte = new Date(startDate);
        }
        if (endDate) {
        filter.createdAt.lte = new Date(endDate);
        }
    }

    console.log("Filtro:", filter)

    const posts = await prisma.post.findMany({
        where: filter,
        // Opcionalmente, também podemos ordenar os posts por uma coluna, como a data de criação
        orderBy: { createdAt: "desc" }
    });

    res.json(posts);
});

// Rota para obter posts com paginação
router.get("/", async (req, res) => {
        // Primeiro, obtemos os parâmetros da URL para paginação
        const page = +req.query.page || 1; // Página atual, padrão 1
        const pageSize = +req.query.pageSize || 10; // Número de posts por página, padrão 10
    
        // Depois, calculamos o número de posts a pular (skip) e o número de posts a obter (take)
        const skip = (page - 1) * pageSize;
        const take = pageSize;
    
        // E então obtemos posts com paginação
        const posts = await prisma.post.findMany({
        skip,
        take,
        orderBy: { createdAt: 'desc' }
        });
    
        // Podemos ainda obter o total de posts para calcular a quantidade total de páginas
        const totalPosts = await prisma.post.count();
        const totalPages = Math.ceil(totalPosts / pageSize);
    
        res.json({
        posts,
        pagination: {
            page,
            pageSize,
            totalPosts,
            totalPages
        }
        });
});

router.put("/:id", async (req, res) => {
    const updatedPost = await prisma.post.update({
        data: {
            ...req.body,
            tags: {
            set: req.body.tags
            }
        },
        where: { id: Number(req.params.id) }
    })
    res.json(updatedPost)
})

router.delete("/:id", async (req, res) => {
    const deletedPost = await prisma.post.delete({
        where: { id: Number(req.params.id) }
    })
    res.json({ deletedPost })
})

module.exports = router;