import { randomUUID } from 'crypto';
import { RequestHandler } from 'express';
import { ApiError } from '../utils/httpError';

interface Sample {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
}

const samples: Sample[] = [];

export const listSamples: RequestHandler = (_req, res) => {
  res.json({ data: samples });
};

export const createSample: RequestHandler = (req, res, next) => {
  try {
    const { name, description } = req.body ?? {};

    if (!name || typeof name !== 'string') {
      throw new ApiError(400, 'name is required');
    }

    const sample: Sample = {
      id: randomUUID(),
      name,
      description,
      createdAt: new Date().toISOString(),
    };

    samples.push(sample);
    res.status(201).json({ data: sample });
  } catch (error) {
    next(error);
  }
};

export const getSample: RequestHandler = (req, res, next) => {
  try {
    const sample = samples.find((item) => item.id === req.params.id);

    if (!sample) {
      throw new ApiError(404, `Sample ${req.params.id} not found`);
    }

    res.json({ data: sample });
  } catch (error) {
    next(error);
  }
};

export const deleteSample: RequestHandler = (req, res, next) => {
  try {
    const index = samples.findIndex((item) => item.id === req.params.id);

    if (index === -1) {
      throw new ApiError(404, `Sample ${req.params.id} not found`);
    }

    const [removed] = samples.splice(index, 1);
    res.json({ data: removed });
  } catch (error) {
    next(error);
  }
};
