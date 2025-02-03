import { z } from 'zod';

export const createTodoSchema = z.object({
  title: z
    .string()
    .min(1, '제목을 입력해주세요')
    .max(100, '제목은 100자 이내로 입력해주세요'),
  content: z
    .string()
    .min(1, '내용을 입력해주세요')
    .max(500, '내용은 500자 이내로 입력해주세요'),
});

export const todoSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(1, '제목을 입력해주세요')
    .max(100, '제목은 100자 이내로 입력해주세요'),
  content: z
    .string()
    .min(1, '내용을 입력해주세요')
    .max(500, '내용은 500자 이내로 입력해주세요'),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const clientTodoSchema = todoSchema.extend({
  isChecked: z.boolean(),
});

export const todoFiltersSchema = z.object({
  sort: z.enum(['createdAt', 'updatedAt', 'priority']).optional(),
  order: z.enum(['asc', 'desc']).optional(),
  priorityFilter: z.enum(['urgent', 'normal', 'low']).optional(),
  keyword: z.string().optional(),
  countOnly: z.boolean().optional(),
});

export type Todo = z.infer<typeof todoSchema>;
export type ClientTodo = z.infer<typeof clientTodoSchema>;
export type TodoFilters = z.infer<typeof todoFiltersSchema>;
export type CreateTodoRequest = z.infer<typeof createTodoSchema>;
