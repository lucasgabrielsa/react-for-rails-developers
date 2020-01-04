# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


course = Course.create(title:'Hello World', description:'Create a react app using ruby on rails')

section = Section.create(title:'Chapter 1', course: course)

episodes = Episode.create([
    { title: 'Ruby on Rails with React', description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos', url: 'https://www.youtube.com/embed/jNQXAC9IVRw', section: section },
    { title: 'Java with Spring', description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos', url: 'https://www.youtube.com/embed/jNQXAC9IVRw', section: section },
    { title: 'Ruby for Developers', description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos', url: 'https://www.youtube.com/embed/jNQXAC9IVRw', section: section },
    { title: 'Rails for Making Money', description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos', url: 'https://www.youtube.com/embed/jNQXAC9IVRw', section: section }                
])